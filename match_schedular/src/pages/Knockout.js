import React, { useState } from "react";

const Knockout = () => {
    const [teams, setTeams] = useState([]);
    const [schedule, setSchedule] = useState([]);

    const generateKnockout = () => {
        if (teams.length % 2 !== 0) {
            alert("Knockout requires an even number of teams.");
            return;
        }

        let matches = [];
        for (let i = 0; i < teams.length; i += 2) {
            matches.push({ team1: teams[i], team2: teams[i + 1] });
        }

        setSchedule(matches);
    };

    return (
        <div>
            <h2>Knockout Tournament</h2>
            <button onClick={generateKnockout}>Generate Schedule</button>
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

export default Knockout;
