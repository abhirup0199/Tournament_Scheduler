import React, { useState } from "react";
import TournamentSelector from "./components/TournamentSelector";
import RoundRobin from "./pages/RoundRobin";
import DoubleRoundRobin from "./pages/DoubleRoundRobin";
import Knockout from "./pages/Knockout";
import GroupStage from "./pages/GroupStage";
import HomeVenueSelector from "./components/HomeVenueSelector"; // New Component

const App = () => {
    const [format, setFormat] = useState("");
    const [homeVenue, setHomeVenue] = useState("");

    return (
        <div className="app-container">
            <h1 className="title">🏆 Sports Tournament Scheduler</h1>
            
            <TournamentSelector onSelect={setFormat} />
            <HomeVenueSelector onSelect={setHomeVenue} />  {/* New Home Venue Feature */}

            {format === "round-robin" && <RoundRobin homeVenue={homeVenue} />}
            {format === "double-round-robin" && <DoubleRoundRobin homeVenue={homeVenue} />}
            {format === "knockout" && <Knockout homeVenue={homeVenue} />}
            {format === "group-stage" && <GroupStage homeVenue={homeVenue} />}
        </div>
    );
};

export default App;
