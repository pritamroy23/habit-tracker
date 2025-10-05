
import React from 'react';


const WeeklyProgress = (props) => {
  
    const habits = props.habits;

   
    return (
      
        <div>
            
          
            <h2>📅 Weekly Progress</h2>
            
         
            <ul>
             
                {habits.map(habit => (
                    
                    <li key={habit.id}>
                        ● {habit.name}
                    </li>
                ))}
            </ul>
            
        </div>
    );
};


export default WeeklyProgress;
