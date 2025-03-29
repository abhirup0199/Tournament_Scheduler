import React, { useState } from "react";

const VenueInput = ({ onVenuesChange }) => {
    const [venues, setVenues] = useState([]);

    const addVenue = () => {
        const venueName = prompt("Enter Venue Name:");
        if (venueName) {
            setVenues([...venues, venueName]);
            onVenuesChange([...venues, venueName]);
        }
    };

    return (
        <div>
            <h2>Venues</h2>
            <button onClick={addVenue}>Add Venue</button>
            <ul>
                {venues.map((venue, index) => (
                    <li key={index}>{venue}</li>
                ))}
            </ul>
        </div>
    );
};

export default VenueInput;
