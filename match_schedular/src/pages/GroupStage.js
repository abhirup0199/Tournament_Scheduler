import React, { useState } from "react";

const GroupStage = () => {
    const [teams, setTeams] = useState([]);
    const [stadiums, setStadiums] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [newStadium, setNewStadium] = useState("");

    const addTeam = () => {
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam("");
        }
    };

    const addStadium = () => {
        if (newStadium.trim() !== "") {
            setStadiums([...stadiums, newStadium.trim()]);
            setNewStadium("");
        }
    };

    return (
        <div>
            <h2>Group Stage Tournament</h2>

            <input
                type="text"
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
                placeholder="Enter team name"
            />
            <button onClick={addTeam}>Add Team</button>

            <input
                type="text"
                value={newStadium}
                onChange={(e) => setNewStadium(e.target.value)}
                placeholder="Enter stadium name"
            />
            <button onClick={addStadium}>Add Stadium</button>

            <h3>Teams:</h3>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>{team}</li>
                ))}
            </ul>

            <h3>Stadiums:</h3>
            <ul>
                {stadiums.map((stadium, index) => (
                    <li key={index}>{stadium}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroupStage;
