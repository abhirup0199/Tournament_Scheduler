import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import RoundRobin from "./pages/RoundRobin";
import DoubleRoundRobin from "./pages/DoubleRoundRobin";
import Knockout from "./pages/Knockout";
import GroupStage from "./pages/GroupStage";
import League from "./pages/League";
import "./styles.css";

const Home = () => {
    const [format, setFormat] = useState("");
    const navigate = useNavigate();

    const handleFormatChange = (e) => {
        const selectedFormat = e.target.value;
        setFormat(selectedFormat);
        if (selectedFormat) {
            navigate(`/${selectedFormat}`);
        }
    };

    return (
        <div className="container">
            <h1>Sports Tournament Scheduler</h1>
            <label>Select Tournament Format:</label>
            <select onChange={handleFormatChange}>
                <option value="">-- Select Format --</option>
                <option value="round-robin">Round Robin</option>
                <option value="double-round-robin">Double Round Robin</option>
                <option value="knockout">Knockout</option>
                <option value="group-stage">Group Stage</option>
                <option value="league">League</option>
            </select>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/round-robin" element={<RoundRobin />} />
                <Route path="/double-round-robin" element={<DoubleRoundRobin />} />
                <Route path="/knockout" element={<Knockout />} />
                <Route path="/group-stage" element={<GroupStage />} />
                <Route path="/league" element={<League />} />
            </Routes>
        </Router>
    );
};

export default App;
