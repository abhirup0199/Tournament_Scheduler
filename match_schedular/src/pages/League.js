import React, { useState } from "react";
import "./League.css"; // Add a new CSS file for styling

const League = () => {
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [homeStadiums, setHomeStadiums] = useState([]);
    const [neutralStadiums, setNeutralStadiums] = useState([]);
    const [newHomeStadium, setNewHomeStadium] = useState("");
    const [newNeutralStadium, setNewNeutralStadium] = useState("");

    // Add new team
    const addTeam = () => {
        if (newTeam.trim() !== "" && !teams.includes(newTeam)) {
            setTeams([...teams, newTeam]);
            setNewTeam("");
        }
    };

    // Add new home stadium
    const addHomeStadium = () => {
        if (newHomeStadium.trim() !== "" && !homeStadiums.includes(newHomeStadium)) {
            setHomeStadiums([...homeStadiums, newHomeStadium]);
            setNewHomeStadium("");
        }
    };

    // Add new neutral stadium
    const addNeutralStadium = () => {
        if (newNeutralStadium.trim() !== "" && !neutralStadiums.includes(newNeutralStadium)) {
            setNeutralStadiums([...neutralStadiums, newNeutralStadium]);
            setNewNeutralStadium("");
        }
    };

    return (
        <div className="league-container">
            <h2>League Format</h2>

            {/* Team Input Section */}
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter team name"
                    value={newTeam}
                    onChange={(e) => setNewTeam(e.target.value)}
                />
                <button onClick={addTeam}>Add Team</button>
            </div>

            {/* Home Stadium Input */}
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter home stadium"
                    value={newHomeStadium}
                    onChange={(e) => setNewHomeStadium(e.target.value)}
                />
                <button onClick={addHomeStadium}>Add Home Stadium</button>
            </div>

            {/* Neutral Stadium Input */}
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter neutral stadium"
                    value={newNeutralStadium}
                    onChange={(e) => setNewNeutralStadium(e.target.value)}
                />
                <button onClick={addNeutralStadium}>Add Neutral Stadium</button>
            </div>

            {/* Display Teams */}
            <h3>Teams</h3>
            <ul className="team-list">
                {teams.map((team, index) => (
                    <li key={index}>{team}</li>
                ))}
            </ul>

            {/* Display Home Stadiums */}
            <h3>Home Stadiums</h3>
            <ul className="stadium-list">
                {homeStadiums.map((stadium, index) => (
                    <li key={index}>{stadium}</li>
                ))}
            </ul>

            {/* Display Neutral Stadiums */}
            <h3>Neutral Stadiums</h3>
            <ul className="stadium-list">
                {neutralStadiums.map((stadium, index) => (
                    <li key={index}>{stadium}</li>
                ))}
            </ul>
        </div>
    );
};

export default League;
