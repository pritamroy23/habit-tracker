
import React from 'react';

const WeeklyProgress = (props) => {
    const habits = props.habits;
    return (
        <div className = "bg-white p-6 rounded-lg shadow-md ">
            <h2 className="text-xl font-bold mb-4 text-gray-800">📅 Weekly Progress</h2>
            <ul className='space-y-2'>
                {habits.map(habit => (
                    
                    <li key={habit.id} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {habit.name}
                    </li>
                ))}
            </ul> 
        </div>
    );
};

export default WeeklyProgress;
