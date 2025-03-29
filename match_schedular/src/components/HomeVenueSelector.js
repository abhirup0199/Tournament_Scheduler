import React from "react";

const HomeVenueSelector = ({ onSelect }) => {
    return (
        <div className="selector-container">
            <label>Select Home Venue</label>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value="">-- Select Venue --</option>
                <option value="team-based">Each team has its own home venue</option>
                <option value="fixed-stadiums">Preselected stadiums</option>
            </select>
        </div>
    );
};

export default HomeVenueSelector;
