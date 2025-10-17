import React from 'react';
import { MdDelete } from "react-icons/md";
const ActiveMissions = ({ habits, toggleHabit, addNewHabit, deleteHabit, darkMode }) => {
    return (
        <div className={`p-6 rounded-xl shadow-lg border transition-all duration-300 ${
            darkMode 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-200 text-gray-900'
        }`}>
            
            {/* Section Header */}
            <h2 className={`text-2xl font-bold mb-6 flex items-center ${
                darkMode ? 'text-white' : 'text-gray-800'
            }`}>
                <span className="mr-3">🚀</span>
                Active Missions
            </h2>
            
            {/* Habits List */}
            <div className="space-y-4 mb-6">
                {habits.map(habit => (
                    <div 
                        key={habit.id} 
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                            habit.completed 
                                ? (darkMode ? 'bg-gray-700 border-green-600' : 'bg-gray-50 border-green-200')
                                : (darkMode ? 'bg-gray-700 border-green-600' : 'bg-gray-50 border-green-200')
                        } ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        
                        {/* Habit Header with Delete Button */}
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-lg">
                                {habit.name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    habit.completed 
                                        ? (darkMode ? 'bg-green-700 text-green-100' : 'bg-green-100 text-green-800')
                                        : (darkMode ? 'bg-yellow-700 text-yellow-100' : 'bg-yellow-100 text-yellow-800')
                                }`}>
                                    {habit.completed ? '✅ Complete!' : '⏳ Incomplete'}
                                </span>
                                {/* DELETE BUTTON */}
                                <button 
                                    onClick={() => deleteHabit(habit.id)}
                                    className={`p-1 rounded transition-colors duration-200 ${
                                        darkMode 
                                            ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-900' 
                                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                                    }`}
                                    title="Delete habit"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                        
                        {/* Streak Counter */}
                        <div className={`flex items-center text-sm mb-3 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            <span className="mr-1">🔥</span>
                            <span>{habit.streak} day streak</span>
                        </div>
                        
                        {/* Toggle Button */}
                        <button 
                            onClick={() => toggleHabit(habit.id)}
                            className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                                habit.completed 
                                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}
                        >
                            {habit.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        
                    </div>
                ))}
            </div>
            
            {/* Add New Mission Button */}
            <button 
                onClick={() => {
                    const newHabitName = prompt("What new habit do you want to track?");
                    if (newHabitName && newHabitName.trim() !== '') {
                        addNewHabit(newHabitName);
                    }
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 shadow-md flex items-center justify-center ${
                    darkMode 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white' 
                        : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white'
                }`}
            >
                <span className="mr-2">✨</span>
                Launch New Mission
            </button>
            
        </div>
    );
};

export default ActiveMissions;