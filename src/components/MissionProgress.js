import React from 'react';

// creating the MissionProgress component
const MissionProgress = (props) => {
    // extracting the data we need from props
    const habits = props.habits;
    const completedHabitsCount = props.completedHabitsCount;
    const progressPercentage = props.progressPercentage;

    // calculating rounded percentage (no decimal)
    const roundedPercentage = Math.round(progressPercentage);
    return (
        // creating the main container div
        <div>
            
            <h2>Mission Progress : {roundedPercentage}%</h2>
            <div>
                <h3>Rocket Fuel</h3>
                <p>{completedHabitsCount}</p>
            </div>

            <div>
                <h3>Active Missions</h3>
                <p>{habits.length}</p>
            </div>      
        </div>
    );
};
//exporting the component to be used in other files
export default MissionProgress;