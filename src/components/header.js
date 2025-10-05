import React from 'react';

const header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header>
      <h1>Habit Tracker</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default header;