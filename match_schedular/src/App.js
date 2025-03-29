import React, { useState } from "react";
import TournamentSelector from "./components/TournamentSelector";
import RoundRobin from "./pages/RoundRobin";
import DoubleRoundRobin from "./pages/DoubleRoundRobin";
import Knockout from "./pages/Knockout";
import GroupStage from "./pages/GroupStage";
import League from "./pages/League";  // ✅ Fixed import
import "./styles.css";

const App = () => {
    const [format, setFormat] = useState("");

    return (
        <div className="app-container">
            <h1 className="title">Sports Tournament Scheduler</h1>
            <TournamentSelector onSelect={setFormat} />
            <div className="tournament-container">
                {format === "round-robin" && <RoundRobin />}
                {format === "double-round-robin" && <DoubleRoundRobin />}
                {format === "knockout" && <Knockout />}
                {format === "group-stage" && <GroupStage />}
                {format === "league" && <League />}
            </div>
        </div>
    );
};

export default App;
