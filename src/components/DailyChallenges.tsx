import React from 'react';
import { ArrowLeft, Calendar, Star, CheckCircle, Clock, Award, Flame, Gift } from 'lucide-react';
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

interface DailyChallengesProps {
  playerData: PlayerData;
  onBack: () => void;
}

const DailyChallenges: React.FC<DailyChallengesProps> = ({ playerData, onBack }) => {
  const today = new Date();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Generate week days
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i);
    return {
      date: date.getDate(),
      day: dayNames[i],
      isToday: date.getDate() === today.getDate(),
      isCompleted: i < today.getDay(),
    };
  });
  
  const dailyChallenges = [
    {
      id: 1,
      title: "Speed Master",
      description: "Answer 20 multiplication questions in under 2 minutes",
      reward: "50 coins + 200 XP",
      progress: 75,
      icon: <Clock size={24} className="text-blue-400" />,
    },
    {
      id: 2,
      title: "Perfect Score",
      description: "Complete a level with 100% accuracy",
      reward: "100 coins + 300 XP",
      progress: 0,
      icon: <Star size={24} className="text-yellow-400" />,
    },
    {
      id: 3,
      title: "Division Pro",
      description: "Solve 15 division problems correctly",
      reward: "75 coins + 250 XP",
      progress: 100,
      icon: <CheckCircle size={24} className="text-green-400" />,
      completed: true,
    },
  ];
  
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
      
      {/* Daily streak calendar */}
      <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 shadow-lg border border-indigo-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <Calendar size={20} className="mr-2 text-indigo-300" />
            Daily Streak
          </h2>
          <div className="bg-indigo-700 px-3 py-1 rounded-full text-sm flex items-center">
            <Flame size={16} className="mr-1 text-orange-400" />
            5 Day Streak
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day, index) => (
            <div 
              key={index} 
              className={`text-center p-2 rounded-lg ${
                day.isToday 
                  ? 'bg-indigo-600 border-2 border-indigo-400' 
                  : day.isCompleted 
                    ? 'bg-indigo-700 bg-opacity-50' 
                    : 'bg-indigo-900 bg-opacity-50'
              }`}
            >
              <div className="text-xs text-indigo-300">{day.day}</div>
              <div className="font-medium">{day.date}</div>
              {day.isCompleted && (
                <div className="mt-1 flex justify-center">
                  <CheckCircle size={16} className="text-green-400" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-indigo-900 bg-opacity-50 rounded-lg p-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Weekly Bonus</div>
            <div className="text-xs text-indigo-300">Complete all 7 days for a special reward!</div>
          </div>
          <div className="bg-indigo-700 px-3 py-1 rounded-lg text-sm flex items-center">
            <Award size={16} className="mr-1 text-yellow-400" />
            500 coins + Mystery Box
          </div>
        </div>
      </div>
      
      {/* Daily challenges */}
      <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 shadow-lg border border-indigo-600">
        <h2 className="text-xl font-bold mb-4">Today's Challenges</h2>
        
        <div className="space-y-4">
          {dailyChallenges.map(challenge => (
            <div 
              key={challenge.id} 
              className={`bg-indigo-700 bg-opacity-50 rounded-lg p-4 ${
                challenge.completed ? 'border border-green-500' : ''
              }`}
            >
              <div className="flex items-start">
                <div className="bg-indigo-800 p-2 rounded-lg mr-3">
                  {challenge.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{challenge.title}</h3>
                    {challenge.completed && (
                      <span className="bg-green-600 px-2 py-0.5 rounded text-xs">Completed</span>
                    )}
                  </div>
                  <p className="text-sm text-indigo-200 mb-2">{challenge.description}</p>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-indigo-900 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${
                        challenge.completed 
                          ? 'bg-green-500' 
                          : 'bg-gradient-to-r from-blue-400 to-indigo-500'
                      }`}
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-indigo-300 flex items-center">
                    <Gift size={14} className="mr-1 text-yellow-400" />
                    Reward: {challenge.reward}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Upcoming challenges preview */}
      <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-4 mt-auto">
        <h3 className="text-sm font-medium text-indigo-200 mb-2">Coming Tomorrow</h3>
        <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
          <div className="flex items-center">
            <Star size={18} className="text-yellow-400 mr-2" />
            <div>
              <div className="font-medium text-sm">Algebra Challenge</div>
              <div className="text-xs text-indigo-300">Solve equations and earn double XP!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;