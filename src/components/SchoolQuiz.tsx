import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/floresData';
import { RevealOnScroll } from './RevealOnScroll';

export const SchoolQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const total = QUIZ_QUESTIONS.length;
  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < total) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsComplete(false);
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <RevealOnScroll direction="up" className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-2 font-medium">
            Interactive Classroom Review
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            Flores de Mayo Knowledge Check
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm font-sans">
            Designed for school presentations, homework review, and student projects. Test your
            understanding of the history, liturgical figures, and folk traditions.
          </p>
        </RevealOnScroll>

        {/* Quiz Container */}
        <RevealOnScroll direction="up" delay={80}>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-md">
            {!isComplete ? (
              <div>
                {/* Progress Bar */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                  <span>
                    Question {currentIdx + 1} of {total}
                  </span>
                  <span className="tabular-nums">Score: {score} pts</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-6">
                  <div
                    className="bg-[#465F4E] h-full transition-all duration-300 ease-out"
                    style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
                  />
                </div>

                {/* Question Text */}
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 mb-6 leading-relaxed">
                  {currentQ.question}
                </h3>

                {/* Options with active click states */}
                <div className="space-y-3">
                  {currentQ.options.map((option, idx) => {
                    let btnStyle = 'border-stone-200 hover:border-stone-300 hover:bg-stone-50 text-stone-700 hover:translate-x-0.5';

                    if (isAnswered) {
                      if (idx === currentQ.correctAnswer) {
                        btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium shadow-2xs';
                      } else if (idx === selectedOption) {
                        btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                      } else {
                        btnStyle = 'border-stone-200 text-stone-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswered}
                        type="button"
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-150 active:scale-[0.98] cursor-pointer text-xs sm:text-sm flex items-center justify-between gap-3 ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center font-mono text-xs font-semibold shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="font-sans">{option}</span>
                        </div>

                        {isAnswered && idx === currentQ.correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 animate-fadeIn" />
                        )}
                        {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswer && (
                          <XCircle className="w-5 h-5 text-rose-500 shrink-0 animate-fadeIn" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box when answered */}
                {isAnswered && (
                  <div className="mt-6 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs sm:text-sm animate-slideDown">
                    <div className="font-semibold text-[#1F3325] mb-1 flex items-center gap-1.5 font-sans">
                      <HelpCircle className="w-4 h-4 text-[#465F4E]" />
                      <span>Educational Explanation:</span>
                    </div>
                    <p className="text-stone-800 leading-relaxed font-sans">{currentQ.explanation}</p>
                  </div>
                )}

                {/* Next Button */}
                {isAnswered && (
                  <div className="mt-6 flex justify-end animate-fadeIn">
                    <button
                      onClick={handleNext}
                      type="button"
                      className="px-5 py-2.5 bg-[#465F4E] hover:bg-[#394F40] active:scale-95 text-white text-xs font-medium rounded-lg flex items-center gap-2 transition-all duration-150 shadow-xs cursor-pointer"
                    >
                      <span>{currentIdx + 1 === total ? 'See Final Score' : 'Next Question'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Results Screen */
              <div className="text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-[#465F4E] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xs">
                  <Award className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mb-1">
                  Quiz Complete!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mb-6 font-sans">
                  You scored <strong className="text-[#22352A] text-base">{score}</strong> out of{' '}
                  <strong className="text-stone-900 text-base">{total}</strong> (
                  {Math.round((score / total) * 100)}%)
                </p>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-stone-200 max-w-md mx-auto mb-6 text-xs text-stone-700 font-sans">
                  {score === total ? (
                    <p className="text-emerald-800 font-medium">
                      Outstanding! You have mastered the historical origins, liturgical sequence, and cultural
                      traditions of Flores de Mayo.
                    </p>
                  ) : score >= 3 ? (
                    <p className="text-[#22352A] font-medium">
                      Great job! You possess a solid understanding of Flores de Mayo for your school project.
                    </p>
                  ) : (
                    <p className="text-stone-700">
                      Good effort! Review the historical facts and Sagalas guide sections to sharpen your presentation knowledge.
                    </p>
                  )}
                </div>

                <button
                  onClick={handleReset}
                  type="button"
                  className="px-5 py-2.5 bg-[#465F4E] hover:bg-[#394F40] active:scale-95 text-white text-xs font-medium rounded-lg inline-flex items-center gap-2 transition-all duration-150 cursor-pointer shadow-xs"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
