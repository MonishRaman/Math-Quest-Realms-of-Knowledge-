import React, { useState } from 'react';

const Signup: React.FC<{ 
  onSignup: (username: string) => void; 
  onNavigateToLogin: () => void; 
}> = ({ onSignup, onNavigateToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSignup(username); // Pass the username to the parent component
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-900">
      <div className="bg-indigo-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-indigo-200">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full rounded-lg bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-indigo-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full rounded-lg bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-indigo-200">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full rounded-lg bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-indigo-200">
          Already have an account?{' '}
          <button
            onClick={onNavigateToLogin}
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;