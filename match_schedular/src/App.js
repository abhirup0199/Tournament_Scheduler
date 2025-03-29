import React, { useState } from "react";
import "./styles.css";

const App = () => {
    const [format, setFormat] = useState("");

    return (
        <div className="container">
            <h1>Sports Tournament Scheduler</h1>
            <label>Select Tournament Format:</label>
            <select onChange={(e) => setFormat(e.target.value)}>
                <option value="">-- Select Format --</option>
                <option value="round-robin">Round Robin</option>
                <option value="double-round-robin">Double Round Robin</option>
                <option value="knockout">Knockout</option>
                <option value="group-stage">Group Stage</option>
                <option value="league">League</option>
            </select>

            {format && <p>Selected Format: <strong>{format}</strong></p>}
        </div>
    );
};

export default App;
