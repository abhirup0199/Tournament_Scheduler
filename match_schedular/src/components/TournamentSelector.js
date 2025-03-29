import React from "react";

const TournamentSelector = ({ onSelect }) => {
    return (
        <div className="selector-container">
            <label>Select Tournament Format</label>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value="">-- Select Format --</option>
                <option value="round-robin">Round Robin</option>
                <option value="double-round-robin">Double Round Robin</option>
                <option value="knockout">Knockout</option>
                <option value="group-stage">Group Stage</option>
            </select>
        </div>
    );
};

export default TournamentSelector;
