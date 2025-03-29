import React, { useState } from "react";

const League = () => {
    const [teams, setTeams] = useState([]);
    const [homeStadiums, setHomeStadiums] = useState({});
    const [neutralStadiums, setNeutralStadiums] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [newStadium, setNewStadium] = useState("");
    const [schedule, setSchedule] = useState([]);
    const [useHomeVenues, setUseHomeVenues] = useState(false);

    // Add team
    const addTeam = () => {
        if (newTeam.trim() !== "" && !teams.includes(newTeam.trim())) {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam(""); 
        }
    };

    // Add home stadium for a team
    const addHomeStadium = () => {
        if (newTeam.trim() !== "" && newStadium.trim() !== "") {
            setHomeStadiums({ ...homeStadiums, [newTeam]: newStadium.trim() });
            setNewStadium(""); 
        }
    };

    // Add neutral stadium
    const addNeutralStadium = () => {
        if (newStadium.trim() !== "" && !neutralStadiums.includes(newStadium.trim())) {
            setNeutralStadiums([...neutralStadiums, newStadium.trim()]);
            setNewStadium("");
        }
    };

    // Generate League Schedule (each team plays every other team twice)
    const generateSchedule = () => {
        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = 0; j < teams.length; j++) {
                if (i !== j) {
                    let stadium = useHomeVenues
                        ? homeStadiums[teams[i]] || "TBA"
                        : neutralStadiums[Math.floor(Math.random() * neutralStadiums.length)] || "TBA";

                    matches.push(`${teams[i]} vs ${teams[j]} at ${stadium}`);
                }
            }
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>League Tournament</h2>

            {/* Input for adding teams */}
            <input type="text" value={newTeam} onChange={(e) => setNewTeam(e.target.value)} placeholder="Enter team name" />
            <button onClick={addTeam}>Add Team</button>

            {/* Input for setting home stadium */}
            <input type="text" value={newStadium} onChange={(e) => setNewStadium(e.target.value)} placeholder="Enter home stadium" />
            <button onClick={addHomeStadium}>Set Home Stadium</button>

            {/* Input for adding neutral stadiums */}
            <button onClick={addNeutralStadium}>Add Neutral Stadium</button>

            {/* Option to use home venues */}
            <label>
                <input type="checkbox" checked={useHomeVenues} onChange={() => setUseHomeVenues(!useHomeVenues)} />
                Use Home Venues
            </label>

            {/* Generate Schedule */}
            <button onClick={generateSchedule}>Generate Schedule</button>

            {/* Display Schedule */}
            <ul>
                {schedule.map((match, index) => (
                    <li key={index}>{match}</li>
                ))}
            </ul>
        </div>
    );
};

export default League;
