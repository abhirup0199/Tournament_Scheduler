import React, { useState } from "react";

const League = () => {
    const [teams, setTeams] = useState([]);
    const [stadiums, setStadiums] = useState([]);
    const [schedule, setSchedule] = useState([]);

    const generateLeagueSchedule = () => {
        if (teams.length < 3) {
            alert("A league requires at least 3 teams.");
            return;
        }

        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                matches.push({ team1: teams[i], team2: teams[j], stadium: "" });
            }
        }

        setSchedule(matches);
    };

    return (
        <div>
            <h2>League Format</h2>
            <button onClick={generateLeagueSchedule}>Generate Schedule</button>
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

export default League;
