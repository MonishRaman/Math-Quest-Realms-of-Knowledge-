import React from 'react';
import { User, Coins } from 'lucide-react';

interface PlayerData {
  username: string;
  level: number;
  xp: number;
  totalXp: number;
  rank: string;
  coins: number;
  avatar: string;
}

interface PlayerProfileProps {
  playerData: PlayerData;
  compact?: boolean;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ playerData, compact = false }) => {
  const { username, level, xp, totalXp, rank, coins, avatar } = playerData;
  const xpPercentage = (xp / totalXp) * 100;
  
  if (compact) {
    return (
      <div className="flex items-center space-x-2 bg-indigo-800 bg-opacity-50 rounded-full px-2 py-1">
        <img 
          src={avatar} 
          alt={username} 
          className="w-8 h-8 rounded-full border-2 border-yellow-400"
        />
        <span className="font-medium text-sm">{username}</span>
        <div className="flex items-center text-yellow-300 text-xs">
          <Coins size={14} className="mr-1" />
          {coins}
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-4 border border-indigo-600">
      <div className="flex items-center">
        <div className="relative">
          <img 
            src={avatar} 
            alt={username} 
            className="w-16 h-16 rounded-full border-2 border-yellow-400"
          />
          <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center border-2 border-indigo-400">
            <span className="text-xs font-bold">{level}</span>
          </div>
        </div>
        
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">{username}</h3>
            <div className="flex items-center text-yellow-300">
              <Coins size={16} className="mr-1" />
              <span>{coins}</span>
            </div>
          </div>
          
          <p className="text-indigo-200 text-sm">{rank}</p>
          
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span>XP: {xp}/{totalXp}</span>
              <span>{Math.round(xpPercentage)}%</span>
            </div>
            <div className="w-full bg-indigo-900 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full"
                style={{ width: `${xpPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;