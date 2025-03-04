import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
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

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface MainMenuProps {
  playerData: PlayerData;
  onNavigate: (mode: string) => void;
  menuItems: MenuItem[];
}

const MainMenu: React.FC<MainMenuProps> = ({ playerData, onNavigate, menuItems }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          >
            <Star size={Math.random() * 30 + 10} />
          </div>
        ))}
      </div>
      
      {/* Game title */}
      <div className="mb-8 text-center z-10">
        <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse">
          MATH QUEST
        </h1>
        <p className="text-xl text-indigo-200">Challenge Your Mind, Level Up Your Skills</p>
      </div>
      
      {/* Player profile */}
      <div className="mb-8 w-full max-w-md">
        <PlayerProfile playerData={playerData} />
      </div>
      
      {/* Main navigation buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl z-10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex items-center justify-between p-4 bg-indigo-800 bg-opacity-80 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 border border-indigo-600"
          >
            <div className="flex items-center">
              <div className="mr-3 text-indigo-300">
                {item.icon}
              </div>
              <span className="text-lg font-medium">{item.label}</span>
            </div>
            <ChevronRight size={20} className="text-indigo-300" />
          </button>
        ))}
      </div>
      
      {/* Version info */}
      <div className="mt-8 text-indigo-300 text-sm">
        v1.0.0 | © 2025 Math Quest
      </div>
    </div>
  );
};

export default MainMenu;