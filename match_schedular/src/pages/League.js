import React, { useState } from "react";

const League = () => {
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [schedule, setSchedule] = useState([]);

    const addTeam = () => {
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam(""); // Clear input
        }
    };

    const generateLeagueSchedule = () => {
        if (teams.length < 3) {
            alert("A league requires at least 3 teams.");
            return;
        }

        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                matches.push(`${teams[i]} vs ${teams[j]}`);
            }
        }
        setSchedule(matches);
    };

    return (
        <div className="league-container">
            <h2>League Tournament</h2>

            {/* Team Input */}
            <input
                type="text"
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
                placeholder="Enter team name"
            />
            <button onClick={addTeam}>Add Team</button>

            {/* Show Teams */}
            <h3>Teams:</h3>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>{team}</li>
                ))}
            </ul>

            {/* Generate Matches */}
            <button onClick={generateLeagueSchedule}>Generate Schedule</button>
            <h3>Schedule:</h3>
            <ul>
                {schedule.map((match, index) => (
                    <li key={index}>{match}</li>
                ))}
            </ul>
        </div>
    );
};

export default League;
