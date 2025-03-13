import React, { useState } from 'react';
import { 
  Brain, 
  Users, 
  Trophy, 
  Award, 
  ShoppingBag, 
  Settings, 
  ChevronRight,
  Star,
  Zap,
  Heart,
  Timer,
  Flame,
  Gift,
  BarChart3,
  User,
  Crown
} from 'lucide-react';
import MainMenu from './components/MainMenu';
import SinglePlayerMode from './components/SinglePlayerMode';
import MultiplayerMode from './components/MultiplayerMode';
import DailyChallenges from './components/DailyChallenges';
import Leaderboards from './components/Leaderboards';
import RewardsShop from './components/RewardsShop';
import SettingsPanel from './components/SettingsPanel';
import Login from './components/Login'; // Import Login component
import Signup from './components/Signup'; // Import Signup component
import AvatarSelection from './components/AvatarSelection'; // Import AvatarSelection component

// Game modes enum
enum GameMode {
  MAIN_MENU = 'MAIN_MENU',
  SINGLE_PLAYER = 'SINGLE_PLAYER',
  MULTIPLAYER = 'MULTIPLAYER',
  DAILY_CHALLENGES = 'DAILY_CHALLENGES',
  LEADERBOARDS = 'LEADERBOARDS',
  REWARDS_SHOP = 'REWARDS_SHOP',
  SETTINGS = 'SETTINGS',
  LOGIN = 'LOGIN', // Add Login mode
  SIGNUP = 'SIGNUP', // Add Signup mode
  AVATAR_SELECTION = 'AVATAR_SELECTION' // Add AvatarSelection mode
}

function App() {
  const [currentMode, setCurrentMode] = useState<GameMode>(GameMode.LOGIN); // Start with Login mode
  const [playerData, setPlayerData] = useState({
    username: '', // Initially empty
    level: 1,
    xp: 0,
    totalXp: 100,
    rank: 'Beginner',
    coins: 0,
    avatar: '' // Initially empty
  });

  // Navigation handler
  const navigateTo = (mode: GameMode) => {
    setCurrentMode(mode);
  };

  // Handle login
  const handleLogin = (username: string) => {
    setPlayerData({ ...playerData, username }); // Update player data with username
    navigateTo(GameMode.AVATAR_SELECTION); // Navigate to avatar selection after login
  };

  // Handle signup
  const handleSignup = (username: string) => {
    setPlayerData({ ...playerData, username }); // Update player data with username
    navigateTo(GameMode.AVATAR_SELECTION); // Navigate to avatar selection after signup
  };

  // Handle avatar selection
  const handleAvatarSelect = (avatarUrl: string) => {
    setPlayerData({ ...playerData, avatar: avatarUrl }); // Update player data with selected avatar
    navigateTo(GameMode.MAIN_MENU); // Navigate to main menu after avatar selection
  };

  // Render the current game mode
  const renderGameMode = () => {
    switch (currentMode) {
      case GameMode.SINGLE_PLAYER:
        return <SinglePlayerMode playerData={playerData} onBack={() => navigateTo(GameMode.MAIN_MENU)} />;
      case GameMode.MULTIPLAYER:
        return <MultiplayerMode playerData={playerData} onBack={() => navigateTo(GameMode.MAIN_MENU)} />;
      case GameMode.DAILY_CHALLENGES:
        return <DailyChallenges playerData={playerData} onBack={() => navigateTo(GameMode.MAIN_MENU)} />;
      case GameMode.LEADERBOARDS:
        return <Leaderboards playerData={playerData} onBack={() => navigateTo(GameMode.MAIN_MENU)} />;
      case GameMode.REWARDS_SHOP:
        return <RewardsShop playerData={playerData} onBack={() => navigateTo(GameMode.MAIN_MENU)} />;
      case GameMode.SETTINGS:
        return <SettingsPanel onBack={() => navigateTo(GameMode.MAIN_MENU)} />;
      case GameMode.LOGIN:
        return <Login onLogin={handleLogin} onNavigateToSignup={() => navigateTo(GameMode.SIGNUP)} />;
      case GameMode.SIGNUP:
        return <Signup onSignup={handleSignup} onNavigateToLogin={() => navigateTo(GameMode.LOGIN)} />;
      case GameMode.AVATAR_SELECTION:
        return <AvatarSelection onAvatarSelect={handleAvatarSelect} />;
      default:
        return (
          <MainMenu 
            playerData={playerData} 
            onNavigate={navigateTo} 
            menuItems={[
              { id: GameMode.SINGLE_PLAYER, label: 'Single Player', icon: <Brain size={24} /> },
              { id: GameMode.MULTIPLAYER, label: 'Multiplayer', icon: <Users size={24} /> },
              { id: GameMode.DAILY_CHALLENGES, label: 'Daily Challenges', icon: <Flame size={24} /> },
              { id: GameMode.LEADERBOARDS, label: 'Leaderboards', icon: <Trophy size={24} /> },
              { id: GameMode.REWARDS_SHOP, label: 'Rewards & Shop', icon: <ShoppingBag size={24} /> },
              { id: GameMode.SETTINGS, label: 'Settings', icon: <Settings size={24} /> },
            ]}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      {renderGameMode()}
    </div>
  );
}

export default App;