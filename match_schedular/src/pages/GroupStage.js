import React, { useState } from "react";

const GroupStage = () => {
    const [teams, setTeams] = useState([]);
    const [groups, setGroups] = useState([]);

    const generateGroups = () => {
        const numGroups = 2;
        let shuffled = [...teams].sort(() => 0.5 - Math.random());
        let groupA = shuffled.slice(0, shuffled.length / numGroups);
        let groupB = shuffled.slice(shuffled.length / numGroups);

        setGroups([groupA, groupB]);
    };

    return (
        <div>
            <h2>Group Stage</h2>
            <button onClick={generateGroups}>Generate Groups</button>
            {groups.map((group, i) => (
                <div key={i}>
                    <h3>Group {i + 1}</h3>
                    <ul>
                        {group.map((team, index) => (
                            <li key={index}>{team}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default GroupStage;
