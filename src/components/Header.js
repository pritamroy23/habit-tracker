import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`flex justify-between items-center mb-8 p-4 rounded-lg shadow-md border transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <h1 className={`text-3xl font-bold ${
        darkMode ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Habit Tracker
      </h1>
      <button 
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
          darkMode 
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' 
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;