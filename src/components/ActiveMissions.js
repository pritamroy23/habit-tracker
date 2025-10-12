import React from 'react';

const ActiveMissions = ({ habits, toggleHabit, addNewHabit, deleteHabit }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            
            {/* Section Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
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
                                ? 'bg-green-50 border-green-200 shadow-sm' 
                                : 'bg-gray-50 border-gray-200'
                        }`}
                    >
                        
                        {/* Habit Header with Delete Button */}
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-gray-800 text-lg">
                                {habit.name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    habit.completed 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {habit.completed ? '✅ Complete!' : '⏳ Incomplete'}
                                </span>
                                {/* DELETE BUTTON */}
                                <button 
                                    onClick={() => deleteHabit(habit.id)}
                                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded transition-colors duration-200"
                                    title="Delete habit"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                        
                        {/* Streak Counter */}
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                            <span className="mr-1">🔥</span>
                            <span>{habit.streak} day streak</span>
                        </div>
                        
                        {/* Toggle Button */}
                        <button 
                            onClick={() => toggleHabit(habit.id)}
                            className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                                habit.completed 
                                    ? 'bg-red-500 hover:bg-red-600 text-white' 
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
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-md flex items-center justify-center"
            >
                <span className="mr-2">✨</span>
                Launch New Mission
            </button>
            
        </div>
    );
};

export default ActiveMissions;