import React, { useState } from 'react';
import { ArrowLeft, Trophy, Users, Calendar, Medal, Crown } from 'lucide-react';
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

interface LeaderboardsProps {
  playerData: PlayerData;
  onBack: () => void;
}

const Leaderboards: React.FC<LeaderboardsProps> = ({ playerData, onBack }) => {
  const [activeTab, setActiveTab] = useState('global');
  
  const leaderboardData = {
    global: [
      { rank: 1, username: 'MathLegend', score: 9850, level: 32, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 2, username: 'NumberNinja', score: 9340, level: 30, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 3, username: 'AlgebraPro', score: 8720, level: 28, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 4, username: 'MathWizard', score: 7650, level: 25, avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 5, username: 'EquationMaster', score: 7120, level: 24, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 6, username: 'CalcKing', score: 6890, level: 23, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 7, username: 'StatisticsQueen', score: 6540, level: 22, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 8, username: 'TrigExpert', score: 6210, level: 21, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 9, username: 'GeometryGenius', score: 5980, level: 20, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 10, username: 'MathMaster', score: 5750, level: 19, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    ],
    friends: [
      { rank: 1, username: 'NumberNinja', score: 9340, level: 30, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 2, username: playerData.username, score: 7650, level: playerData.level, avatar: playerData.avatar },
      { rank: 3, username: 'EquationMaster', score: 7120, level: 24, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 4, username: 'GeometryGenius', score: 5980, level: 20, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    ],
    weekly: [
      { rank: 1, username: 'AlgebraPro', score: 3720, level: 28, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 2, username: 'NumberNinja', score: 3340, level: 30, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 3, username: 'MathLegend', score: 2850, level: 32, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 4, username: 'CalcKing', score: 2690, level: 23, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 5, username: playerData.username, score: 2450, level: playerData.level, avatar: playerData.avatar },
      { rank: 6, username: 'EquationMaster', score: 2120, level: 24, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 7, username: 'StatisticsQueen', score: 1940, level: 22, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 8, username: 'TrigExpert', score: 1810, level: 21, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 9, username: 'GeometryGenius', score: 1680, level: 20, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { rank: 10, username: 'MathMaster', score: 1550, level: 19, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    ],
  };
  
  const renderLeaderboardItem = (item: any, index: number) => {
    const isCurrentUser = item.username === playerData.username;
    const isTopThree = item.rank <= 3;
    
    return (
      <div 
        key={index} 
        className={`flex items-center p-3 rounded-lg ${
          isCurrentUser ? 'bg-indigo-600 border border-indigo-400' : 'bg-indigo-700 bg-opacity-50'
        } ${index % 2 === 0 ? 'bg-opacity-60' : 'bg-opacity-40'}`}
      >
        <div className="w-8 flex justify-center">
          {isTopThree ? (
            <div className={`
              w-6 h-6 flex items-center justify-center rounded-full
              ${item.rank === 1 ? 'bg-yellow-500' : item.rank === 2 ? 'bg-gray-300' : 'bg-amber-600'}
            `}>
              {item.rank === 1 ? (
                <Crown size={14} />
              ) : (
                <span className="text-xs font-bold">{item.rank}</span>
              )}
            </div>
          ) : (
            <span className="text-sm text-indigo-300">{item.rank}</span>
          )}
        </div>
        
        <img 
          src={item.avatar} 
          alt={item.username} 
          className={`w-8 h-8 rounded-full mx-2 ${
            isTopThree ? 'border-2 ' + (
              item.rank === 1 ? 'border-yellow-400' : 
              item.rank === 2 ? 'border-gray-300' : 
              'border-amber-600'
            ) : ''
          }`}
        />
        
        <div className="flex-1">
          <div className="font-medium text-sm">{item.username}</div>
          <div className="text-xs text-indigo-300">Level {item.level}</div>
        </div>
        
        <div className="text-right">
          <div className="font-bold">{item.score}</div>
          <div className="text-xs text-indigo-300">points</div>
        </div>
      </div>
    );
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
      
      {/* Leaderboard tabs */}
      <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 shadow-lg border border-indigo-600 flex-1">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Trophy size={24} className="mr-2 text-yellow-400" />
          Leaderboards
        </h2>
        
        <div className="flex mb-4 bg-indigo-900 bg-opacity-50 rounded-lg p-1">
          <button 
            onClick={() => setActiveTab('global')}
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${
              activeTab === 'global' ? 'bg-indigo-700' : ''
            }`}
          >
            <Trophy size={16} className="mr-1" />
            <span>Global</span>
          </button>
          <button 
            onClick={() => setActiveTab('friends')}
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${
              activeTab === 'friends' ? 'bg-indigo-700' : ''
            }`}
          >
            <Users size={16} className="mr-1" />
            <span>Friends</span>
          </button>
          <button 
            onClick={() => setActiveTab('weekly')}
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${
              activeTab === 'weekly' ? 'bg-indigo-700' : ''
            }`}
          >
            <Calendar size={16} className="mr-1" />
            <span>Weekly</span>
          </button>
        </div>
        
        {/* Top 3 podium for global and weekly */}
        {(activeTab === 'global' || activeTab === 'weekly') && (
          <div className="flex justify-center items-end mb-6 h-32">
            {/* 2nd place */}
            <div className="flex flex-col items-center mx-2">
              <img 
                src={leaderboardData[activeTab][1].avatar} 
                alt={leaderboardData[activeTab][1].username} 
                className="w-12 h-12 rounded-full border-4 border-gray-300 mb-2"
              />
              <div className="text-sm font-medium">{leaderboardData[activeTab][1].username}</div>
              <div className="bg-gray-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mt-1">
                2
              </div>
              <div className="bg-indigo-700 h-20 w-16 rounded-t-lg mt-2 flex items-center justify-center">
                <div className="text-lg font-bold">{leaderboardData[activeTab][1].score}</div>
              </div>
            </div>
            
            {/* 1st place */}
            <div className="flex flex-col items-center mx-2">
              <div className="relative">
                <img 
                  src={leaderboardData[activeTab][0].avatar} 
                  alt={leaderboardData[activeTab][0].username} 
                  className="w-16 h-16 rounded-full border-4 border-yellow-400 mb-2"
                />
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Crown size={24} className="text-yellow-400" />
                </div>
              </div>
              <div className="text-sm font-medium">{leaderboardData[activeTab][0].username}</div>
              <div className="bg-yellow-400 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mt-1">
                1
              </div>
              <div className="bg-indigo-600 h-28 w-20 rounded-t-lg mt-2 flex items-center justify-center">
                <div className="text-xl font-bold">{leaderboardData[activeTab][0].score}</div>
              </div>
            </div>
            
            {/* 3rd place */}
            <div className="flex flex-col items-center mx-2">
              <img 
                src={leaderboardData[activeTab][2].avatar} 
                alt={leaderboardData[activeTab][2].username} 
                className="w-12 h-12 rounded-full border-4 border-amber-600 mb-2"
              />
              <div className="text-sm font-medium">{leaderboardData[activeTab][2].username}</div>
              <div className="bg-amber-600 text-amber-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mt-1">
                3
              </div>
              <div className="bg-indigo-700 h-16 w-16 rounded-t-lg mt-2 flex items-center justify-center">
                <div className="text-lg font-bold">{leaderboardData[activeTab][2].score}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Leaderboard list */}
        <div className="space-y-2 overflow-y-auto max-h-96">
          {leaderboardData[activeTab].map(renderLeaderboardItem)}
        </div>
        
        {/* Your rank */}
        <div className="mt-6 bg-indigo-700 bg-opacity-70 rounded-lg p-3">
          <h3 className="text-sm font-medium text-indigo-200 mb-2">Your Ranking</h3>
          <div className="flex items-center">
            <div className="bg-indigo-600 px-2 py-1 rounded text-sm mr-3">
              {activeTab === 'global' ? '#42' : activeTab === 'friends' ? '#2' : '#5'}
            </div>
            <div className="flex-1">
              <div className="text-sm">Top {activeTab === 'global' ? '5%' : activeTab === 'friends' ? '50%' : '10%'}</div>
              <div className="w-full bg-indigo-900 rounded-full h-2 mt-1">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full"
                  style={{ width: activeTab === 'global' ? '95%' : activeTab === 'friends' ? '50%' : '90%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rewards for top ranks */}
      <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-4">
        <h3 className="text-sm font-medium text-indigo-200 mb-2">Leaderboard Rewards</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-indigo-700 p-2 rounded-lg text-center">
            <div className="flex justify-center mb-1">
              <Medal size={20} className="text-yellow-400" />
            </div>
            <div className="text-xs">1st Place</div>
            <div className="text-sm font-medium">1000 coins</div>
          </div>
          <div className="bg-indigo-700 p-2 rounded-lg text-center">
            <div className="flex justify-center mb-1">
              <Medal size={20} className="text-gray-300" />
            </div>
            <div className="text-xs">2nd Place</div>
            <div className="text-sm font-medium">750 coins</div>
          </div>
          <div className="bg-indigo-700 p-2 rounded-lg text-center">
            <div className="flex justify-center mb-1">
              <Medal size={20} className="text-amber-600" />
            </div>
            <div className="text-xs">3rd Place</div>
            <div className="text-sm font-medium">500 coins</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;