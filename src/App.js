import React, { useState } from 'react';
import Header from './components/Header';  
import MissionProgress from './components/MissionProgress';
import ActiveMissions from './components/ActiveMissions';
import WeeklyProgress from './components/WeeklyProgress';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', completed: true, streak: 1 },
    { id: 2, name: 'Running', completed: true, streak: 1 }
  ]);

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

const addNewHabit = (habitName) => {
    if (habitName.trim() === '') return; // Don't add empty habits
    
    const newHabit = {
      id: Date.now(), // Simple unique ID
      name: habitName,
      completed: false, // New habits start as incomplete
      streak: 0         // New habits start with 0 streak
    };
    
    setHabits([...habits, newHabit]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id 
        ? { ...habit, completed: !habit.completed } 
        : habit
    ));
  };

  const completedHabitsCount = habits.filter(habit => habit.completed).length;
  const progressPercentage = (completedHabitsCount / habits.length) * 100;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MissionProgress 
            habits={habits} 
            progressPercentage={progressPercentage}
            completedHabitsCount={completedHabitsCount}
            darkMode={darkMode}
          />
          
          <div className="space-y-8">
            <ActiveMissions habits={habits} toggleHabit={toggleHabit} addNewHabit={addNewHabit} deleteHabit={deleteHabit} darkMode={darkMode}/>
            <WeeklyProgress habits={habits} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;