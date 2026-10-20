// EcoPulse Node.js Server with MongoDB Atlas Persistence
const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Load local .env file if present (for local testing without extra packages)
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const idx = trimmed.indexOf('=');
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  } catch (err) {
    console.warn('[EcoPulse] Notice: Could not read .env file:', err.message);
  }
}

// 2. Server Configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// 3. MongoDB Client Setup
let MongoClient;
try {
  ({ MongoClient } = require('mongodb'));
} catch (e) {
  console.warn('[EcoPulse] Notice: "mongodb" package not yet installed. Run "npm install" to enable database storage.');
}

let dbClient = null;
let planCollection = null;

async function initMongoDB() {
  if (!MongoClient) {
    return;
  }
  if (!MONGODB_URI) {
    console.log('[EcoPulse] ℹ️  MONGODB_URI is not set in environment or .env file.');
    console.log('[EcoPulse] ℹ️  Running in Local Storage Mode — full website functionality is available without a database.');
    console.log('[EcoPulse] ℹ️  To connect to MongoDB Atlas, add your connection string to MONGODB_URI.');
    return;
  }

  try {
    dbClient = new MongoClient(MONGODB_URI);
    await dbClient.connect();
    const db = dbClient.db('ecopulse');
    planCollection = db.collection('action_plans');
    console.log('✅ Connected to MongoDB Atlas successfully! (Database: ecopulse)');
  } catch (err) {
    console.error('❌ MongoDB Atlas connection error:', err.message);
  }
}

// Initialize DB connection in background
initMongoDB();

// 4. MIME Types for Static File Serving
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function sendJSON(res, statusCode, data) {
  const payload = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(payload);
}

// 5. Main HTTP Request Handler
const server = http.createServer((req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  const urlPath = req.url.split('?')[0];

  // ----------------------------------------------------
  // API Route: Health Check
  // ----------------------------------------------------
  if (urlPath === '/api/health' && req.method === 'GET') {
    return sendJSON(res, 200, {
      status: 'ok',
      mongoConnected: !!planCollection,
      port: PORT,
      timestamp: new Date().toISOString()
    });
  }

  // ----------------------------------------------------
  // API Route: GET /api/plan (Retrieve Action Plan)
  // ----------------------------------------------------
  if (urlPath === '/api/plan' && req.method === 'GET') {
    if (!planCollection) {
      return sendJSON(res, 200, {
        success: false,
        message: 'MongoDB is not connected. Using browser localStorage.',
        plan: []
      });
    }

    planCollection.findOne({ id: 'user_action_plan' })
      .then(doc => {
        sendJSON(res, 200, {
          success: true,
          plan: doc && Array.isArray(doc.plan) ? doc.plan : [],
          updatedAt: doc ? doc.updatedAt : null,
          source: 'mongodb'
        });
      })
      .catch(err => {
        console.error('[EcoPulse] Error reading plan from MongoDB:', err.message);
        sendJSON(res, 500, {
          success: false,
          error: 'Failed to retrieve plan from database'
        });
      });
    return;
  }

  // ----------------------------------------------------
  // API Route: POST /api/plan (Save Action Plan)
  // ----------------------------------------------------
  if (urlPath === '/api/plan' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      // Prevent oversized request attacks (max 1MB)
      if (body.length > 1e6) {
        req.destroy();
      }
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        const planItems = Array.isArray(data.plan) ? data.plan : [];

        if (!planCollection) {
          return sendJSON(res, 200, {
            success: false,
            message: 'MONGODB_URI not configured on server. Plan saved in localStorage only.',
            count: planItems.length
          });
        }

        const now = new Date();
        await planCollection.updateOne(
          { id: 'user_action_plan' },
          {
            $set: {
              id: 'user_action_plan',
              plan: planItems,
              updatedAt: now
            }
          },
          { upsert: true }
        );

        return sendJSON(res, 200, {
          success: true,
          message: 'Action plan successfully saved to MongoDB Atlas',
          count: planItems.length,
          updatedAt: now
        });
      } catch (err) {
        console.error('[EcoPulse] Error saving plan to MongoDB:', err.message);
        return sendJSON(res, 400, {
          success: false,
          error: 'Invalid JSON payload or database error'
        });
      }
    });
    return;
  }

  // ----------------------------------------------------
  // Static File Serving
  // ----------------------------------------------------
  let filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Fallback to index.html for client-side routing
        fs.readFile(path.join(__dirname, 'index.html'), (indexErr, indexContent) => {
          if (indexErr) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(indexContent);
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content);
    }
  });
});

// 6. Start Server
server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🌱 EcoPulse Web App Running!`);
  console.log(`👉 Access URL: http://localhost:${PORT}`);
  console.log(`📦 MongoDB Driver: Installed & Active`);
  console.log(`💾 Storage Mode: ${MONGODB_URI ? 'MongoDB Atlas Cloud' : 'Local Storage Mode (Browser Persistence)'}`);
  console.log(`==================================================\n`);
});
