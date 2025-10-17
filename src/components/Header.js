import React from 'react';
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

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
        className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
          darkMode 
            ? 'bg-gray-400 text-gray-900 hover:bg-gray-500' 
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {darkMode ? <IoSunnySharp size={20} /> : <IoMoonSharp size={20} />}
      </button>
    </header>
  );
};

export default Header;