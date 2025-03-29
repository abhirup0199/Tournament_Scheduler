import React, { useState } from "react";

const GroupStage = () => {
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [groups, setGroups] = useState({});

    const addTeam = () => {
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam("");
        }
    };

    const generateGroups = () => {
        if (teams.length < 4) {
            alert("Group Stage needs at least 4 teams.");
            return;
        }

        let groupCount = Math.ceil(teams.length / 4);
        let shuffledTeams = [...teams].sort(() => Math.random() - 0.5);
        let generatedGroups = {};

        for (let i = 0; i < groupCount; i++) {
            generatedGroups[`Group ${i + 1}`] = shuffledTeams.splice(0, 4);
        }

        setGroups(generatedGroups);
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
            <button onClick={generateGroups}>Generate Groups</button>

            <h3>Groups:</h3>
            {Object.keys(groups).map((group, index) => (
                <div key={index}>
                    <h4>{group}</h4>
                    <ul>
                        {groups[group].map((team, idx) => (
                            <li key={idx}>{team}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default GroupStage;
