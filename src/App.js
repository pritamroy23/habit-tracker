import React , {useState} from 'react';
import Header from './components/Header';
import MissionProgress from './components/MissionProgress';
import ActiveMissions from './components/ActiveMissions';
import WeeklyProgress from './components/WeeklyProgress';

function App() {
  const [darkMode , setDarkMode] = useState(false);
  const[habits , setHabits] = useState([
    {id:1 , name:"Drink Water" , completed: true},
    {id:2 , name:"Exercise" , completed: false},
    {id:3 , name:"Read Book" , completed: true},
  ]);

  const toggleDarkmode = () => {
    setDarkMode(!darkMode);
  };
  const toggleHabits =(id) =>{
    setHabits(habits.map(habit => habit.id === id ?{...habit , completed: !habit.completed} : habit));
  };

  const completedHabitsCount = habits.filter(habit => habit.completed).length;
  const progressPercentage = (completedHabitsCount/ habits.length) * 100;

  

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkmode}/>
      <div className="main-container">
        <MissionProgress habits ={habits}
        progressPercentage={progressPercentage}
        completedHabitsCount={completedHabitsCount}
        />

        <div className="right-section">
          <ActiveMissions habits ={habits} toggleHabits={toggleHabits}/>

          <WeeklyProgress habits={habits}/>
        </div>
      </div>
    </div>



  );

}
export default App;