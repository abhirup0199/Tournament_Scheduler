import React, { useState } from "react";

const DoubleRoundRobin = () => {
    const [teams, setTeams] = useState([]);
    const [homeStadiums, setHomeStadiums] = useState({});
    const [neutralStadiums, setNeutralStadiums] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [newStadium, setNewStadium] = useState("");
    const [schedule, setSchedule] = useState([]);
    const [useHomeVenues, setUseHomeVenues] = useState(false);

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
                for (let round = 0; round < 2; round++) {
                    let stadium = useHomeVenues
                        ? homeStadiums[teams[round === 0 ? i : j]] || homeStadiums[teams[round === 0 ? j : i]]
                        : neutralStadiums[Math.floor(Math.random() * neutralStadiums.length)] || "TBA";

                    matches.push(`${teams[i]} vs ${teams[j]} at ${stadium}`);
                }
            }
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>Double Round Robin Tournament</h2>

            <input type="text" value={newTeam} onChange={(e) => setNewTeam(e.target.value)} placeholder="Enter team name" />
            <button onClick={addTeam}>Add Team</button>

            <input type="text" value={newStadium} onChange={(e) => setNewStadium(e.target.value)} placeholder="Enter home stadium" />
            <button onClick={addHomeStadium}>Set Home Stadium</button>

            <button onClick={addNeutralStadium}>Add Neutral Stadium</button>

            <label>
                <input type="checkbox" checked={useHomeVenues} onChange={() => setUseHomeVenues(!useHomeVenues)} />
                Use Home Venues
            </label>

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
