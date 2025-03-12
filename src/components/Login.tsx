import React, { useState } from 'react';

const Login: React.FC<{ 
  onLogin: (username: string) => void; 
  onNavigateToSignup: () => void; 
}> = ({ onLogin, onNavigateToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username); // Pass the username to the parent component
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-900">
      <div className="bg-indigo-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-indigo-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full rounded-lg bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-all transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-indigo-200">
          Don't have an account?{' '}
          <button
            onClick={onNavigateToSignup}
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;