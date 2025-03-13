import React from 'react';

// Import images from the assets folder
import Avatar1 from '../assets/download (1).jpg';
import Avatar2 from '../assets/Dobby.jpg';
import Avatar3 from '../assets/Homer Simpson.jpg';
import Avatar4 from '../assets/Swipe to see some custom iPhone wallpapers I made today using Pinterest, midjourney and Photoshop’s firefly_ Which one’s your favorite_ You can download them on my threads account_.jpg';
import Avatar5 from '../assets/download (2).jpg';
import Avatar6 from '../assets/download.jpg';

// List of imported avatars
const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];


const AvatarSelection: React.FC<{ onAvatarSelect: (avatarUrl: string) => void }> = ({ onAvatarSelect }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-900">
      <div className="bg-indigo-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Choose Your Avatar</h2>
        <div className="grid grid-cols-2 gap-4">
          {avatars.map((avatar, index) => (
            <button
              key={index}
              onClick={() => onAvatarSelect(avatar)}
              className="p-4 rounded-lg bg-indigo-700 hover:bg-indigo-600 transition-all transform hover:scale-105"
            >
              <img src={avatar} alt={`Avatar ${index + 1}`} className="w-24 h-24 rounded-full" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;