// EcoPulse Educational Quiz & Information Component
import { QUIZ_QUESTIONS, EDUCATIONAL_CARDS } from '../data/quiz.js';

export function EducationalQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optIndex) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQuestionIndex]: optIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setSubmitted(false);
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return React.createElement('section', { id: 'learn', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/40' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      
      // Header
      React.createElement('div', { className: 'space-y-2 mb-10' },
        React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
          React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
          React.createElement('span', null, 'COMMUNITY KNOWLEDGE')
        ),
        React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
          'Small Changes. ',
          React.createElement('span', { className: 'text-emerald-400' }, 'Better Cities.')
        ),
        React.createElement('p', { className: 'text-slate-400 text-sm max-w-2xl' },
          'Explore essential urban sustainability concepts and test your knowledge with our interactive 5-question quiz.'
        )
      ),

      // 6 Educational Cards Grid
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16' },
        EDUCATIONAL_CARDS.map((card, idx) =>
          React.createElement('div', { key: idx, className: 'glass-card p-6 rounded-3xl border border-emerald-800/40 space-y-3' },
            React.createElement('div', { className: 'w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-lg font-bold' }, '🌿'),
            React.createElement('h3', { className: 'text-base font-bold text-white tracking-tight' }, card.title),
            React.createElement('p', { className: 'text-xs text-slate-300 leading-relaxed' }, card.summary)
          )
        )
      ),

      // Interactive 5-Question Quiz Card
      React.createElement('div', { className: 'glass-panel p-8 rounded-3xl border border-emerald-800/40 max-w-3xl mx-auto space-y-6 glow-emerald' },
        
        // Quiz Header bar
        React.createElement('div', { className: 'flex items-center justify-between pb-4 border-b border-emerald-900/50' },
          React.createElement('div', { className: 'space-y-1' },
            React.createElement('span', { className: 'text-xs font-bold text-emerald-400 uppercase tracking-widest' }, 'SUSTAINABILITY KNOWLEDGE QUIZ'),
            React.createElement('h3', { className: 'text-xl font-extrabold text-white' }, 'Urban Ecology Challenge')
          ),
          React.createElement('span', { className: 'px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono font-bold border border-emerald-800' },
            submitted ? 'Quiz Completed' : `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`
          )
        ),

        // Quiz Body
        !submitted ? React.createElement('div', { className: 'space-y-6 animate-fadeIn' },
          
          // Question Text
          React.createElement('h4', { className: 'text-base sm:text-lg font-bold text-white leading-snug' },
            currentQ.question
          ),

          // 4 Option Buttons
          React.createElement('div', { className: 'space-y-3' },
            currentQ.options.map((opt, oIdx) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === oIdx;
              return React.createElement('button', {
                key: oIdx,
                onClick: () => handleSelectOption(oIdx),
                className: `w-full text-left p-4 rounded-2xl text-xs font-medium transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md'
                    : 'bg-slate-950/80 text-slate-200 border-emerald-900/50 hover:bg-emerald-950/40 hover:border-emerald-500/30'
                }`
              },
                React.createElement('span', { className: 'pr-3' }, `${String.fromCharCode(65 + oIdx)}. ${opt}`),
                isSelected && React.createElement('span', { className: 'font-mono text-slate-950' }, '✓')
              );
            })
          ),

          // Next / Submit Button
          React.createElement('div', { className: 'flex justify-end pt-4' },
            React.createElement('button', {
              onClick: handleNext,
              disabled: selectedAnswers[currentQuestionIndex] === undefined,
              className: `px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                selectedAnswers[currentQuestionIndex] !== undefined
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-600 cursor-not-allowed'
              }`
            },
              currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question →' : 'Submit Quiz Answers'
            )
          )
        ) :
        // Quiz Results State
        React.createElement('div', { className: 'text-center space-y-6 py-6 animate-fadeIn' },
          React.createElement('div', { className: 'w-20 h-20 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-4xl mx-auto glow-emerald' }, '🏆'),
          
          React.createElement('div', { className: 'space-y-2' },
            React.createElement('h4', { className: 'text-2xl font-extrabold text-white' }, 'Quiz Completed!'),
            React.createElement('div', { className: 'text-3xl font-black text-emerald-400 font-mono' },
              `Score: ${calculateScore()} / ${QUIZ_QUESTIONS.length}`
            ),
            React.createElement('p', { className: 'text-xs text-slate-300 max-w-md mx-auto' },
              calculateScore() === 5
                ? 'Outstanding! You have mastered the fundamentals of smart urban environmental patterns.'
                : 'Great effort! Review the questions and retake the quiz to maximize your score.'
            )
          ),

          // Detailed Answers & Explanations Review List
          React.createElement('div', { className: 'text-left space-y-4 pt-4 border-t border-emerald-900/50' },
            QUIZ_QUESTIONS.map((q, idx) => {
              const uAns = selectedAnswers[idx];
              const isCorrect = uAns === q.correctIndex;
              return React.createElement('div', { key: q.id, className: 'p-4 rounded-2xl bg-slate-950 border border-emerald-900/50 space-y-1 text-xs' },
                React.createElement('div', { className: 'flex items-center justify-between font-bold' },
                  React.createElement('span', { className: 'text-white' }, `Q${idx + 1}: ${q.question}`),
                  React.createElement('span', { className: `px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-rose-950 text-rose-400 border border-rose-800/40'}` },
                    isCorrect ? '✓ Correct' : '✕ Incorrect'
                  )
                ),
                React.createElement('p', { className: 'text-slate-400 text-[11px] pt-1' }, `Explanation: ${q.explanation}`)
              );
            })
          ),

          React.createElement('button', {
            onClick: handleResetQuiz,
            className: 'px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg'
          }, 'Retake Sustainability Quiz')
        )
      )
    )
  );
}
