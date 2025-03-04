import React, { useState } from 'react';
import { ArrowLeft, Users, MessageCircle, Play, User, Crown } from 'lucide-react';
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

interface MultiplayerModeProps {
  playerData: PlayerData;
  onBack: () => void;
}

const MultiplayerMode: React.FC<MultiplayerModeProps> = ({ playerData, onBack }) => {
  const [isInLobby, setIsInLobby] = useState(true);
  const [lobbyPlayers, setLobbyPlayers] = useState([
    { id: 1, username: playerData.username, level: playerData.level, avatar: playerData.avatar, ready: true },
    { id: 2, username: 'MathGenius', level: 15, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', ready: false },
    { id: 3, username: 'NumberWizard', level: 8, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', ready: true },
  ]);
  
  const startGame = () => {
    setIsInLobby(false);
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
      
      {isInLobby ? (
        // Lobby UI
        <div className="flex-1 flex flex-col">
          <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 shadow-lg border border-indigo-600">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <Users size={24} className="mr-2 text-indigo-300" />
                Multiplayer Lobby
              </h2>
              <div className="bg-indigo-700 px-3 py-1 rounded-full text-sm">
                3/4 Players
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-indigo-200 mb-2">Players</h3>
              <div className="space-y-2">
                {lobbyPlayers.map(player => (
                  <div key={player.id} className="flex items-center justify-between bg-indigo-700 bg-opacity-50 rounded-lg p-3">
                    <div className="flex items-center">
                      <img 
                        src={player.avatar} 
                        alt={player.username} 
                        className="w-10 h-10 rounded-full border-2 border-indigo-500"
                      />
                      <div className="ml-3">
                        <div className="font-medium">{player.username}</div>
                        <div className="text-xs text-indigo-300">Level {player.level}</div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs ${player.ready ? 'bg-green-600' : 'bg-gray-600'}`}>
                      {player.ready ? 'Ready' : 'Not Ready'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-indigo-200 mb-2">Game Settings</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
                  <div className="text-xs text-indigo-300">Game Mode</div>
                  <div className="font-medium">Speed Battle</div>
                </div>
                <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
                  <div className="text-xs text-indigo-300">Difficulty</div>
                  <div className="font-medium">Medium</div>
                </div>
                <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
                  <div className="text-xs text-indigo-300">Questions</div>
                  <div className="font-medium">10</div>
                </div>
                <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3">
                  <div className="text-xs text-indigo-300">Time Limit</div>
                  <div className="font-medium">30 seconds</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                Chat
              </button>
              <button 
                onClick={startGame}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 py-3 rounded-lg flex items-center justify-center font-medium"
              >
                <Play size={20} className="mr-2" />
                Start Game
              </button>
            </div>
          </div>
          
          <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-4 mt-auto">
            <h3 className="text-sm font-medium text-indigo-200 mb-2">Quick Chat</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-indigo-700 p-2 rounded-lg text-sm hover:bg-indigo-600 text-left">
                Hello everyone!
              </button>
              <button className="bg-indigo-700 p-2 rounded-lg text-sm hover:bg-indigo-600 text-left">
                Good luck!
              </button>
              <button className="bg-indigo-700 p-2 rounded-lg text-sm hover:bg-indigo-600 text-left">
                I'm ready!
              </button>
              <button className="bg-indigo-700 p-2 rounded-lg text-sm hover:bg-indigo-600 text-left">
                One moment please...
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Battle UI
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <img 
                  src={playerData.avatar} 
                  alt={playerData.username} 
                  className="w-8 h-8 rounded-full border-2 border-blue-400"
                />
                <div className="ml-2">
                  <div className="font-medium text-sm">{playerData.username}</div>
                  <div className="text-xs text-blue-300">You</div>
                </div>
                <div className="ml-auto bg-blue-600 px-2 py-0.5 rounded text-xs">
                  Score: 250
                </div>
              </div>
              <div className="w-full bg-indigo-900 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            
            <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="MathGenius" 
                  className="w-8 h-8 rounded-full border-2 border-red-400"
                />
                <div className="ml-2">
                  <div className="font-medium text-sm">MathGenius</div>
                  <div className="text-xs text-red-300">Opponent</div>
                </div>
                <div className="ml-auto bg-red-600 px-2 py-0.5 rounded text-xs">
                  Score: 320
                </div>
              </div>
              <div className="w-full bg-indigo-900 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Question panel */}
          <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 text-center shadow-lg border border-indigo-600">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-indigo-700 px-3 py-1 rounded-full text-sm">
                Question 3/10
              </div>
              <div className="bg-indigo-700 px-3 py-1 rounded-full text-sm flex items-center">
                <Crown size={16} className="mr-1 text-yellow-400" />
                MathGenius is leading!
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">What is the value of 3x + 7 when x = 5?</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 bg-indigo-700 hover:bg-indigo-600">
                18
              </button>
              <button className="p-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 bg-indigo-700 hover:bg-indigo-600">
                22
              </button>
              <button className="p-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 bg-indigo-700 hover:bg-indigo-600">
                20
              </button>
              <button className="p-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 bg-indigo-700 hover:bg-indigo-600">
                24
              </button>
            </div>
            
            <div className="mt-6 w-full bg-indigo-900 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-red-500 h-3 rounded-full"
                style={{ width: '40%' }}
              ></div>
            </div>
          </div>
          
          <div className="bg-indigo-800 bg-opacity-70 rounded-lg p-4 mt-auto">
            <h3 className="text-sm font-medium text-indigo-200 mb-2">Battle Stats</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-indigo-700 p-2 rounded-lg">
                <div className="text-xs text-indigo-300">Correct</div>
                <div className="font-medium">2/3</div>
              </div>
              <div className="bg-indigo-700 p-2 rounded-lg">
                <div className="text-xs text-indigo-300">Avg. Time</div>
                <div className="font-medium">4.2s</div>
              </div>
              <div className="bg-indigo-700 p-2 rounded-lg">
                <div className="text-xs text-indigo-300">Streak</div>
                <div className="font-medium">1</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiplayerMode;