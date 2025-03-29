import React, { useState } from "react";

const RoundRobin = () => {
    const [teams, setTeams] = useState([]);
    const [homeStadiums, setHomeStadiums] = useState({});
    const [neutralStadiums, setNeutralStadiums] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [newStadium, setNewStadium] = useState("");
    const [schedule, setSchedule] = useState([]);
    const [useHomeVenues, setUseHomeVenues] = useState(false);

    // ✅ Add Team
    const addTeam = () => {
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam(""); 
        }
    };

    // ✅ Add Home Stadium
    const addHomeStadium = () => {
        if (newTeam.trim() !== "" && newStadium.trim() !== "") {
            setHomeStadiums({ ...homeStadiums, [newTeam]: newStadium.trim() });
            setNewStadium(""); 
        }
    };

    // ✅ Add Neutral Stadium
    const addNeutralStadium = () => {
        if (newStadium.trim() !== "") {
            setNeutralStadiums([...neutralStadiums, newStadium.trim()]);
            setNewStadium("");
        }
    };

    // ✅ Generate Schedule
    const generateSchedule = () => {
        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                let stadium = useHomeVenues 
                    ? homeStadiums[teams[i]] || homeStadiums[teams[j]] 
                    : neutralStadiums[Math.floor(Math.random() * neutralStadiums.length)] || "TBA";

                matches.push(`${teams[i]} vs ${teams[j]} at ${stadium}`);
            }
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>Round Robin Tournament</h2>

            {/* ✅ Add Teams */}
            <input type="text" value={newTeam} onChange={(e) => setNewTeam(e.target.value)} placeholder="Enter team name" />
            <button onClick={addTeam}>Add Team</button>

            {/* ✅ Add Home Stadiums */}
            <input type="text" value={newStadium} onChange={(e) => setNewStadium(e.target.value)} placeholder="Enter home stadium" />
            <button onClick={addHomeStadium}>Set Home Stadium</button>

            {/* ✅ Add Neutral Stadiums */}
            <button onClick={addNeutralStadium}>Add Neutral Stadium</button>

            {/* ✅ Toggle Home Venues */}
            <label>
                <input type="checkbox" checked={useHomeVenues} onChange={() => setUseHomeVenues(!useHomeVenues)} />
                Use Home Venues
            </label>

            {/* ✅ Generate Schedule */}
            <button onClick={generateSchedule}>Generate Schedule</button>

            {/* ✅ Display Matches */}
            <ul>
                {schedule.map((match, index) => (
                    <li key={index}>{match}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoundRobin;
