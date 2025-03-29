import React, { useState } from "react";

const RoundRobin = () => {
    const [teams, setTeams] = useState([]);
    const [schedule, setSchedule] = useState([]);

    const generateSchedule = () => {
        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                matches.push({ team1: teams[i], team2: teams[j] });
            }
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>Round Robin Tournament</h2>
            <button onClick={generateSchedule}>Generate Schedule</button>
            <ul>
                {schedule.map((match, index) => (
                    <li key={index}>
                        {match.team1} vs {match.team2}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoundRobin;
