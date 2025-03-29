import React, { useState } from "react";

const DoubleRoundRobin = () => {
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [schedule, setSchedule] = useState([]);

    const addTeam = () => {
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam("");
        }
    };

    const generateSchedule = () => {
        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                matches.push(`${teams[i]} vs ${teams[j]}`);
                matches.push(`${teams[j]} vs ${teams[i]}`); // Reverse match for double round-robin
            }
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>Double Round Robin Tournament</h2>
            <input
                type="text"
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
                placeholder="Enter team name"
            />
            <button onClick={addTeam}>Add Team</button>
            <button onClick={generateSchedule}>Generate Schedule</button>
            <ul>
                {schedule.map((match, index) => (
                    <li key={index}>{match}</li>
                ))}
            </ul>
        </div>
    );
};

export default DoubleRoundRobin;
