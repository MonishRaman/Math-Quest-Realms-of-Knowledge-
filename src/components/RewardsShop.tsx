import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Gift, Coins, User, Palette, Zap, Award } from 'lucide-react';
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

interface RewardsShopProps {
  playerData: PlayerData;
  onBack: () => void;
}

const RewardsShop: React.FC<RewardsShopProps> = ({ playerData, onBack }) => {
  const [activeTab, setActiveTab] = useState('powerups');
  
  const shopItems = {
    powerups: [
      { id: 1, name: 'Time Freeze', description: 'Pause the timer for 10 seconds', price: 100, icon: <Timer size={24} className="text-blue-400" /> },
      { id: 2, name: 'Double Points', description: 'Double points for the next 5 questions', price: 150, icon: <Zap size={24} className="text-yellow-400" /> },
      { id: 3, name: 'Extra Life', description: 'Add one extra life to your game', price: 200, icon: <Heart size={24} className="text-red-400" /> },
      { id: 4, name: 'Skip Question', description: 'Skip a difficult question without penalty', price: 75, icon: <SkipForward size={24} className="text-green-400" /> },
      { id: 5, name: 'Hint', description: 'Get a hint for a difficult question', price: 50, icon: <HelpCircle size={24} className="text-purple-400" /> },
    ],
    avatars: [
      { id: 1, name: 'Math Wizard', description: 'Show your magical math skills', price: 300, image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { id: 2, name: 'Number Ninja', description: 'Swift and precise with calculations', price: 300, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { id: 3, name: 'Professor Pi', description: 'Scholarly and wise', price: 500, image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { id: 4, name: 'Equation Expert', description: 'Master of all formulas', price: 400, image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    ],
    themes: [
      { id: 1, name: 'Galaxy Theme', description: 'Explore the cosmos while solving math', price: 500, color: 'from-purple-900 via-indigo-800 to-blue-900' },
      { id: 2, name: 'Forest Theme', description: 'Serene green environment', price: 500, color: 'from-green-800 via-emerald-700 to-teal-800' },
      { id: 3, name: 'Sunset Theme', description: 'Warm and inspiring colors', price: 500, color: 'from-orange-700 via-red-600 to-pink-700' },
      { id: 4, name: 'Ocean Theme', description: 'Dive into the deep blue sea', price: 500, color: 'from-blue-800 via-cyan-700 to-teal-800' },
    ],
    badges: [
      { id: 1, name: 'Speed Demon', description: 'Complete 50 questions in under 1 minute', price: 'Achievement', icon: <Timer size={24} className="text-blue-400" /> },
      { id: 2, name: 'Perfect Streak', description: 'Answer 20 questions correctly in a row', price: 'Achievement', icon: <CheckCircle size={24} className="text-green-400" /> },
      { id: 3, name: 'Math Champion', description: 'Reach level 20', price: 'Achievement', icon: <Award size={24} className="text-yellow-400" /> },
      { id: 4, name: 'Multiplayer Victor', description: 'Win 10 multiplayer matches', price: 'Achievement', icon: <Trophy size={24} className="text-purple-400" /> },
    ],
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
        <div className="flex items-center">
          <div className="flex items-center bg-indigo-700 px-3 py-1 rounded-full mr-3">
            <Coins size={16} className="text-yellow-400 mr-1" />
            <span className="font-medium">{playerData.coins}</span>
          </div>
          <PlayerProfile playerData={playerData} compact={true} />
        </div>
      </div>
      
      {/* Shop content */}
      <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 shadow-lg border border-indigo-600 flex-1">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <ShoppingBag size={24} className="mr-2 text-indigo-300" />
          Rewards & Shop
        </h2>
        
        {/* Shop tabs */}
        <div className="flex mb-6 bg-indigo-900 bg-opacity-50 rounded-lg p-1">
          <button 
            onClick={() => setActiveTab('powerups')}
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${
              activeTab === 'powerups' ? 'bg-indigo-700' : ''
            }`}
          >
            <Zap size={16} className="mr-1" />
            <span>Power-ups</span>
          </button>
          <button 
            onClick={() => setActiveTab('avatars')}
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${
              activeTab === 'avatars' ? 'bg-indigo-700' : ''
            }`}
          >
            <User size={16} className="mr-1" />
            <span>Avatars</span>
          </button>
          <button 
            onClick={() => setActiveTab('themes')}
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${
              activeTab === 'themes' ? 'bg-indigo-700' : ''
            }`}
          >
            <Palette size={16} className="mr-1" />
            <span>Themes</span>
          </button>
          <button 
            onClick={() => setActiveTab('badges')}
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${
              activeTab === 'badges' ? 'bg-indigo-700' : ''
            }`}
          >
            <Award size={16} className="mr-1" />
            <span>Badges</span>
          </button>
        </div>
        
        {/* Shop items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-96">
          {activeTab === 'powerups' && shopItems.powerups.map(item => (
            <div key={item.id} className="bg-indigo-700 bg-opacity-50 rounded-lg p-4 flex">
              <div className="bg-indigo-800 p-3 rounded-lg mr-3">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center bg-indigo-600 px-2 py-0.5 rounded text-sm">
                    <Coins size={14} className="text-yellow-400 mr-1" />
                    {item.price}
                  </div>
                </div>
                <p className="text-sm text-indigo-200 mb-2">{item.description}</p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-1 rounded text-sm font-medium">
                  Purchase
                </button>
              </div>
            </div>
          ))}
          
          {activeTab === 'avatars' && shopItems.avatars.map(item => (
            <div key={item.id} className="bg-indigo-700 bg-opacity-50 rounded-lg p-4 flex">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 rounded-full border-2 border-indigo-500 mr-3"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center bg-indigo-600 px-2 py-0.5 rounded text-sm">
                    <Coins size={14} className="text-yellow-400 mr-1" />
                    {item.price}
                  </div>
                </div>
                <p className="text-sm text-indigo-200 mb-2">{item.description}</p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-1 rounded text-sm font-medium">
                  Purchase
                </button>
              </div>
            </div>
          ))}
          
          {activeTab === 'themes' && shopItems.themes.map(item => (
            <div key={item.id} className="bg-indigo-700 bg-opacity-50 rounded-lg p-4 flex">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} mr-3`}></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center bg-indigo-600 px-2 py-0.5 rounded text-sm">
                    <Coins size={14} className="text-yellow-400 mr-1" />
                    {item.price}
                  </div>
                </div>
                <p className="text-sm text-indigo-200 mb-2">{item.description}</p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-1 rounded text-sm font-medium">
                  Purchase
                </button>
              </div>
            </div>
          ))}
          
          {activeTab === 'badges' && shopItems.badges.map(item => (
            <div key={item.id} className="bg-indigo-700 bg-opacity-50 rounded-lg p-4 flex">
              <div className="bg-indigo-800 p-3 rounded-lg mr-3">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="bg-purple-600 px-2 py-0.5 rounded text-xs">
                    {item.price}
                  </div>
                </div>
                <p className="text-sm text-indigo-200 mb-2">{item.description}</p>
                <div className="w-full bg-indigo-900 rounded-full h-2 mb-1">
                  <div 
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-right text-indigo-300">Progress: 7/20</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Daily rewards */}
      <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-4 mt-auto">
        <h3 className="text-sm font-medium text-indigo-200 mb-2 flex items-center">
          <Gift size={18} className="text-pink-400 mr-1" />
          Daily Reward
        </h3>
        <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3 flex items-center justify-between">
          <div>
            <div className="font-medium">Free Coins!</div>
            <div className="text-xs text-indigo-300">Claim your daily 50 coins</div>
          </div>
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 px-4 py-2 rounded-lg text-sm font-medium">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardsShop;