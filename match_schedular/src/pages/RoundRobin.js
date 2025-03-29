import React, { useState } from "react";

const RoundRobin = ({ homeVenue }) => {
    const [teams, setTeams] = useState(["Team A", "Team B", "Team C", "Team D"]);
    const [stadiums, setStadiums] = useState(["Stadium X", "Stadium Y"]);
    const [schedule, setSchedule] = useState([]);

    const generateSchedule = () => {
        let matches = [];
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                let venue =
                    homeVenue === "team-based"
                        ? `${teams[i]}'s Home Stadium`
                        : stadiums[Math.floor(Math.random() * stadiums.length)];

                matches.push({
                    match: `${teams[i]} vs ${teams[j]}`,
                    venue: venue,
                });
            }
        }
        setSchedule(matches);
    };

    return (
        <div>
            <h2>Round Robin Tournament</h2>
            <button onClick={generateSchedule}>Generate Schedule</button>
            <ul>
                {schedule.map((match, index) => (
                    <li key={index}>{match.match} - <b>{match.venue}</b></li>
                ))}
            </ul>
        </div>
    );
};

export default RoundRobin;
