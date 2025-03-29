import React, { useState } from "react";

const GroupStage = () => {
    const [teams, setTeams] = useState([]);
    const [homeStadiums, setHomeStadiums] = useState({});
    const [neutralStadiums, setNeutralStadiums] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [newStadium, setNewStadium] = useState("");
    const [schedule, setSchedule] = useState([]);

    const addTeam = () => {
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam(""); 
        }
    };

    const addHomeStadium = () => {
        if (newTeam.trim() !== "" && newStadium.trim() !== "") {
            setHomeStadiums({ ...homeStadiums, [newTeam]: newStadium.trim() });
            setNewStadium(""); 
        }
    };

    const addNeutralStadium = () => {
        if (newStadium.trim() !== "") {
            setNeutralStadiums([...neutralStadiums, newStadium.trim()]);
            setNewStadium("");
        }
    };

    const generateSchedule = () => {
        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                let stadium = neutralStadiums[Math.floor(Math.random() * neutralStadiums.length)] || "TBA";
                matches.push(`${teams[i]} vs ${teams[j]} at ${stadium}`);
            }
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>Group Stage Tournament</h2>

            <input type="text" value={newTeam} onChange={(e) => setNewTeam(e.target.value)} placeholder="Enter team name" />
            <button onClick={addTeam}>Add Team</button>

            <button onClick={addNeutralStadium}>Add Neutral Stadium</button>

            <button onClick={generateSchedule}>Generate Schedule</button>

            <ul>
                {schedule.map((match, index) => (
                    <li key={index}>{match}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroupStage;
