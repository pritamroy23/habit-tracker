import React from 'react';

const MissionProgress = (props) => {
    const habits = props.habits;
    const completedHabitsCount = props.completedHabitsCount;
    const progressPercentage = props.progressPercentage;
    const darkMode = props.darkMode;

    // calculating rounded percentage 
    const roundedPercentage = Math.round(progressPercentage);
    
    return (
        // Main container with dark mode
        <div className={`p-6 rounded-xl shadow-lg border transition-all duration-300 ${
            darkMode 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-200 text-gray-900'
        }`}>
            
            {/* Progress Header */}
            <h2 className={`text-2xl font-bold mb-6 text-center ${
                darkMode ? 'text-white' : 'text-gray-800'
            }`}>
                Mission Progress: <span className="text-blue-400">{roundedPercentage}%</span>
            </h2>
            
            {/* Stats Container */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* Rocket Fuel Card */}
                <div className={`p-4 rounded-lg text-white text-center shadow-md transition-all duration-300 ${
                    darkMode 
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                        : 'bg-gradient-to-br from-blue-500 to-blue-600'
                }`}>
                    <h3 className="font-semibold text-sm mb-2">🚀 Rocket Fuel</h3>
                    <p className="text-3xl font-bold">{completedHabitsCount}</p>
                    <p className="text-xs opacity-80 mt-1">Completed Today</p>
                </div>

                {/* Active Missions Card */}
                <div className={`p-4 rounded-lg text-white text-center shadow-md transition-all duration-300 ${
                    darkMode 
                        ? 'bg-gradient-to-br from-purple-600 to-purple-700' 
                        : 'bg-gradient-to-br from-purple-500 to-purple-600'
                }`}>
                    <h3 className="font-semibold text-sm mb-2">📋 Active Missions</h3>
                    <p className="text-3xl font-bold">{habits.length}</p>
                    <p className="text-xs opacity-80 mt-1">Total Habits</p>
                </div>
                
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
                <div className={`flex justify-between text-sm mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    <span>Progress</span>
                    <span>{roundedPercentage}%</span>
                </div>
                <div className={`w-full rounded-full h-3 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                    <div 
                        className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
            
        </div>
    );
};

export default MissionProgress;