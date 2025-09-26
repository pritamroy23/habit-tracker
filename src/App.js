import React, { useState } from 'react';
import Header from './components/Header';
import MissionProgress from './components/MissionProgress';
//import ActiveMissions from './components/ActiveMissions';
//import WeeklyProgress from './components/WeeklyProgress';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', completed: true, streak: 1 },
    { id: 2, name: 'Running', completed: true, streak: 1 }
  ]);

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
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="main-container">
        <MissionProgress habits={habits} />
        
        {/*<div className="right-column">
          <ActiveMissions habits={habits} toggleHabit={toggleHabit} />
          <WeeklyProgress habits={habits} />
        </div>*/}
      </div> 
      
      
    </div>
  );
};

export default App;