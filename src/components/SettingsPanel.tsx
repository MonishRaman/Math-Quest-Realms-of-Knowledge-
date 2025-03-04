import React, { useState } from 'react';
import { ArrowLeft, Volume2, VolumeX, Monitor, Moon, Sun, Sliders, Languages, HelpCircle, LogOut } from 'lucide-react';

interface SettingsPanelProps {
  onBack: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onBack }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [theme, setTheme] = useState('system');
  const [difficulty, setDifficulty] = useState('medium');
  const [language, setLanguage] = useState('english');
  
  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-200 hover:text-white"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Back to Menu</span>
        </button>
      </div>
      
      {/* Settings content */}
      <div className="bg-indigo-800 bg-opacity-80 rounded-xl p-6 mb-6 shadow-lg border border-indigo-600 flex-1">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Settings size={24} className="mr-2 text-indigo-300" />
          Settings
        </h2>
        
        {/* Audio settings */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Audio</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="flex items-center">
                <Volume2 size={20} className="text-indigo-300 mr-3" />
                <div>
                  <div className="font-medium">Sound Effects</div>
                  <div className="text-xs text-indigo-300">Game sounds and effects</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={soundEnabled}
                  onChange={() => setSoundEnabled(!soundEnabled)}
                />
                <div className="w-11 h-6 bg-indigo-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="flex items-center">
                <Music size={20} className="text-indigo-300 mr-3" />
                <div>
                  <div className="font-medium">Background Music</div>
                  <div className="text-xs text-indigo-300">Game music and ambience</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={musicEnabled}
                  onChange={() => setMusicEnabled(!musicEnabled)}
                />
                <div className="w-11 h-6 bg-indigo-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
              </label>
            </div>
            
            <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Volume2 size={20} className="text-indigo-300 mr-3" />
                  <div className="font-medium">Volume</div>
                </div>
                <div className="text-sm">75%</div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value="75" 
                className="w-full h-2 bg-indigo-900 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
        
        {/* Display settings */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Display</h3>
          <div className="space-y-4">
            <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="font-medium mb-2">Theme</div>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setTheme('light')}
                  className={`flex items-center justify-center p-2 rounded ${
                    theme === 'light' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  <Sun size={20} className="mr-1" />
                  <span>Light</span>
                </button>
                <button 
                  onClick={() => setTheme('dark')}
                  className={`flex items-center justify-center p-2 rounded ${
                    theme === 'dark' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  <Moon size={20} className="mr-1" />
                  <span>Dark</span>
                </button>
                <button 
                  onClick={() => setTheme('system')}
                  className={`flex items-center justify-center p-2 rounded ${
                    theme === 'system' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  <Monitor size={20} className="mr-1" />
                  <span>System</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="flex items-center">
                <Eye size={20} className="text-indigo-300 mr-3" />
                <div>
                  <div className="font-medium">Colorblind Mode</div>
                  <div className="text-xs text-indigo-300">Adjust colors for better visibility</div>
                </div>
              </div>
              <select className="bg-indigo-800 border border-indigo-600 text-white rounded-lg p-2">
                <option>Off</option>
                <option>Protanopia</option>
                <option>Deuteranopia</option>
                <option>Tritanopia</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="flex items-center">
                <Maximize size={20} className="text-indigo-300 mr-3" />
                <div>
                  <div className="font-medium">Text Size</div>
                  <div className="text-xs text-indigo-300">Adjust UI text size</div>
                </div>
              </div>
              <select className="bg-indigo-800 border border-indigo-600 text-white rounded-lg p-2">
                <option>Small</option>
                <option selected>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Game settings */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Game</h3>
          <div className="space-y-4">
            <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="font-medium mb-2">Difficulty</div>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setDifficulty('easy')}
                  className={`p-2 rounded ${
                    difficulty === 'easy' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  Easy
                </button>
                <button 
                  onClick={() => setDifficulty('medium')}
                  className={`p-2 rounded ${
                    difficulty === 'medium' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  Medium
                </button>
                <button 
                  onClick={() => setDifficulty('hard')}
                  className={`p-2 rounded ${
                    difficulty === 'hard' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  Hard
                </button>
              </div>
            </div>
            
            <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-4">
              <div className="font-medium mb-2">Language</div>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setLanguage('english')}
                  className={`flex items-center justify-center p-2 rounded ${
                    language === 'english' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  <Languages size={20} className="mr-1" />
                  <span>English</span>
                </button>
                <button 
                  onClick={() => setLanguage('spanish')}
                  className={`flex items-center justify-center p-2 rounded ${
                    language === 'spanish' ? 'bg-indigo-500' : 'bg-indigo-800 bg-opacity-50'
                  }`}
                >
                  <Languages size={20} className="mr-1" />
                  <span>Español</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Account settings */}
        <div>
          <h3 className="text-lg font-medium mb-3">Account</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between bg-indigo-700 bg-opacity-50 rounded-lg p-4 hover:bg-indigo-600">
              <div className="flex items-center">
                <HelpCircle size={20} className="text-indigo-300 mr-3" />
                <span>Help & Support</span>
              </div>
              <ChevronRight size={20} className="text-indigo-300" />
            </button>
            
            <button className="w-full flex items-center justify-between bg-indigo-700 bg-opacity-50 rounded-lg p-4 hover:bg-indigo-600">
              <div className="flex items-center">
                <Shield size={20} className="text-indigo-300 mr-3" />
                <span>Privacy Policy</span>
              </div>
              <ChevronRight size={20} className="text-indigo-300" />
            </button>
            
            <button className="w-full flex items-center justify-between bg-red-700 bg-opacity-50 rounded-lg p-4 hover:bg-red-600">
              <div className="flex items-center">
                <LogOut size={20} className="mr-3" />
                <span>Sign Out</span>
              </div>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Version info */}
      <div className="text-center text-indigo-300 text-sm">
        Math Quest v1.0.0 | © 2025 Math Quest
      </div>
    </div>
  );
};

export default SettingsPanel;