import React from 'react';

const header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className='flex justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-md'>
      <h1 className="text-3xl font-bold text-blue-600 ">Habit Tracker</h1>
      <button onClick={toggleDarkMode}
      className ={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
        darkMode 
        ?'bg-gray-300 hover:bg-gray-400'
        : 'bg-gray-800  hover:bg-grey-900'
      }`}>
        
        {darkMode ? '☀️ ' : '🌙 '}
      </button>
    </header>
  );
};

export default header;
