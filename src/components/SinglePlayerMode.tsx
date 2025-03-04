import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Zap, Timer, Flame, Gift } from 'lucide-react';
import PlayerProfile from './PlayerProfile';

interface PlayerData {
  username: string;
  level: number;
  xp: number;
  totalXp: number;
  rank: string;
  coins: number;
  avatar: string;
}

interface SinglePlayerModeProps {
  playerData: PlayerData;
  onBack: () => void;
}

const SinglePlayerMode: React.FC<SinglePlayerModeProps> = ({ playerData, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "What is 12 × 8?",
    options: ["86", "96", "106", "116"],
    correctAnswer: 1,
  });
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [health, setHealth] = useState(3);
  
  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    // Handle time up
  }, [timeLeft]);
  
  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    
    // Check if answer is correct
    if (index === currentQuestion.correctAnswer) {
      const comboMultiplier = Math.min(3, 1 + combo * 0.1);
      setScore(score + Math.round(100 * comboMultiplier));
      setCombo(combo + 1);
      
      // Generate new question after a delay
      setTimeout(() => {
        setSelectedAnswer(null);
        // In a real app, you'd generate a new question here
      }, 1000);
    } else {
      setCombo(0);
      setHealth(health - 1);
      
      // Generate new question after a delay
      setTimeout(() => {
        setSelectedAnswer(null);
        // In a real app, you'd generate a new question here
      }, 1000);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Header with back button and player profile */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-200 hover:text-white"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Back to Menu</span>
        </button>
        <PlayerProfile playerData={playerData} compact={true} />
      </div>
      
      {/* Game stats bar */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-3 flex items-center">
          <Heart size={20} className="text-red-400 mr-2" />
          <div>
            <div className="text-xs text-indigo-200">Health</div>
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i} 
                  size={16} 
                  fill={i < health ? "#f87171" : "transparent"} 
                  stroke={i < health ? "#f87171" : "#6366f1"} 
                  className="mr-1"
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-3 flex items-center">
          <Timer size={20} className="text-blue-400 mr-2" />
          <div>
            <div className="text-xs text-indigo-200">Time</div>
            <div className="font-bold">{timeLeft}s</div>
          </div>
        </div>
        
        <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-3 flex items-center">
          <Flame size={20} className="text-orange-400 mr-2" />
          <div>
            <div className="text-xs text-indigo-200">Combo</div>
            <div className="font-bold">x{combo}</div>
          </div>
        </div>
        
        <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-3 flex items-center">
          <Zap size={20} className="text-yellow-400 mr-2" />
          <div>
            <div className="text-xs text-indigo-200">Score</div>
            <div className="font-bold">{score}</div>
          </div>
        </div>
      </div>
      
      {/* Question panel */}
      <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 text-center shadow-lg border border-indigo-600">
        <h2 className="text-2xl font-bold mb-6">{currentQuestion.question}</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`p-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 ${
                selectedAnswer === null
                  ? 'bg-indigo-700 hover:bg-indigo-600'
                  : selectedAnswer === index
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-600'
                      : 'bg-red-600'
                    : index === currentQuestion.correctAnswer && selectedAnswer !== null
                      ? 'bg-green-600'
                      : 'bg-indigo-700 opacity-70'
              }`}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {/* Power-ups */}
      <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-indigo-200 mb-2">Power-ups</h3>
        <div className="flex space-x-2">
          <button className="bg-indigo-700 p-2 rounded-lg hover:bg-indigo-600">
            <Gift size={24} className="text-pink-400" />
          </button>
          <button className="bg-indigo-700 p-2 rounded-lg hover:bg-indigo-600">
            <Timer size={24} className="text-blue-400" />
          </button>
          <button className="bg-indigo-700 p-2 rounded-lg hover:bg-indigo-600">
            <Zap size={24} className="text-yellow-400" />
          </button>
        </div>
      </div>
      
      {/* XP progress */}
      <div className="mt-auto bg-indigo-800 bg-opacity-70 rounded-lg p-4">
        <div className="flex justify-between text-xs mb-1">
          <span>Level Progress</span>
          <span>{playerData.xp}/{playerData.totalXp} XP</span>
        </div>
        <div className="w-full bg-indigo-900 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full"
            style={{ width: `${(playerData.xp / playerData.totalXp) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayerMode;