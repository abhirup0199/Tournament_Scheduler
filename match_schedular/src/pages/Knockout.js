import React, { useState } from "react";

const Knockout = () => {
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState("");
    const [schedule, setSchedule] = useState([]);

    const addTeam = () => {
        if (newTeam.trim() !== "") {
            setTeams([...teams, newTeam.trim()]);
            setNewTeam("");
        }
    };

    const generateSchedule = () => {
        if (teams.length < 2) {
            alert("A knockout tournament needs at least 2 teams.");
            return;
        }

        let matches = [];
        let round = 1;
        let roundTeams = [...teams];

        while (roundTeams.length > 1) {
            let nextRoundTeams = [];
            matches.push(`Round ${round}:`);
            for (let i = 0; i < roundTeams.length; i += 2) {
                if (i + 1 < roundTeams.length) {
                    matches.push(`${roundTeams[i]} vs ${roundTeams[i + 1]}`);
                    nextRoundTeams.push(`Winner of ${roundTeams[i]} vs ${roundTeams[i + 1]}`);
                } else {
                    nextRoundTeams.push(roundTeams[i]); // Odd team auto-advances
                }
            }
            roundTeams = nextRoundTeams;
            round++;
        }

        setSchedule(matches);
    };

    return (
        <div>
            <h2>Knockout Tournament</h2>
            <input
                type="text"
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
                placeholder="Enter team name"
            />
            <button onClick={addTeam}>Add Team</button>
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
