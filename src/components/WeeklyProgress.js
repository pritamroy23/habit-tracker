import React from 'react';

const WeeklyProgress = (props) => {
    const habits = props.habits;
    const darkMode = props.darkMode;
    
    return (
        <div className={`p-6 rounded-lg shadow-md border transition-all duration-300 ${
            darkMode 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-200 text-gray-800'
        }`}>
            <h2 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-800'
            }`}>
                📅 Weekly Progress
            </h2>
            <ul className='space-y-2'>
                {habits.map(habit => (
                    <li 
                        key={habit.id} 
                        className={`flex items-center p-2 rounded transition-colors duration-200 ${
                            darkMode 
                                ? 'text-gray-200 hover:bg-gray-700' 
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                            darkMode ? 'bg-green-400' : 'bg-green-500'
                        }`}></span>
                        {habit.name}
                    </li>
                ))}
            </ul> 
        </div>
    );
};

export default WeeklyProgress;