import React, { useState } from "react";

const Knockout = () => {
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
        let remainingTeams = [...teams];

        while (remainingTeams.length > 1) {
            let newRound = [];
            for (let i = 0; i < remainingTeams.length; i += 2) {
                if (i + 1 < remainingTeams.length) {
                    let stadium = neutralStadiums[Math.floor(Math.random() * neutralStadiums.length)] || "TBA";
                    matches.push(`${remainingTeams[i]} vs ${remainingTeams[i + 1]} at ${stadium}`);
                    newRound.push(remainingTeams[i]); // Winner moves on (placeholder logic)
                }
            }
            remainingTeams = newRound;
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>Knockout Tournament</h2>

            <input type="text" value={newTeam} onChange={(e) => setNewTeam(e.target.value)} placeholder="Enter team name" />
            <button onClick={addTeam}>Add Team</button>

            <input type="text" value={newStadium} onChange={(e) => setNewStadium(e.target.value)} placeholder="Enter home stadium" />
            <button onClick={addHomeStadium}>Set Home Stadium</button>

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

export default Knockout;
