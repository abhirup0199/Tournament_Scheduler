import React, { useState } from "react";

const TeamInput = ({ onTeamsChange }) => {
    const [teams, setTeams] = useState([]);

    const addTeam = () => {
        const teamName = prompt("Enter Team Name:");
        if (teamName) {
            setTeams([...teams, teamName]);
            onTeamsChange([...teams, teamName]);
        }
    };

    return (
        <div>
            <h2>Teams</h2>
            <button onClick={addTeam}>Add Team</button>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>{team}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeamInput;
