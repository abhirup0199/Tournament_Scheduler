import React, { useState } from "react";

function TournamentScheduler() {
  const [teams, setTeams] = useState(["Team A", "Team B"]);
  const [stadiums, setStadiums] = useState(["Stadium 1", "Stadium 2"]);

  return (
    <div>
      <h2>Schedule Creator</h2>
      <label>Enter Teams:</label>
      <input type="text" placeholder="Team Name" />
      <label>Enter Stadiums:</label>
      <input type="text" placeholder="Stadium Name" />
      <button>Generate Schedule</button>
    </div>
  );
}

export default TournamentScheduler;
