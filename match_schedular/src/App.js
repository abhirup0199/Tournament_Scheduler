import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import League from "./pages/League";
import RoundRobin from "./pages/RoundRobin";
import Knockout from "./pages/Knockout";
import DoubleRoundRobin from "./pages/DoubleRoundRobin";
import GroupStage from "./pages/GroupStage";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Main />
        </Router>
    );
};

const Main = () => {
    const navigate = useNavigate(); // ✅ Use navigate to change pages
    const [format, setFormat] = useState("");

    const handleFormatChange = (e) => {
        const selectedFormat = e.target.value;
        setFormat(selectedFormat);
        if (selectedFormat) navigate(`/${selectedFormat}`); // ✅ Navigate on change
    };

    return (
        <div className="container">
            <h1>Sports Tournament Scheduler</h1>

            <label>Select Tournament Format:</label>
            <select onChange={handleFormatChange} value={format}>
                <option value="">-- Select Format --</option>
                <option value="league">League</option>
                <option value="roundrobin">Round Robin</option>
                <option value="doubleroundrobin">Double Round Robin</option>
                <option value="knockout">Knockout</option>
                <option value="groupstage">Group Stage</option>
            </select>

            <Routes>
                <Route path="/league" element={<League />} />
                <Route path="/roundrobin" element={<RoundRobin />} />
                <Route path="/doubleroundrobin" element={<DoubleRoundRobin />} />
                <Route path="/knockout" element={<Knockout />} />
                <Route path="/groupstage" element={<GroupStage />} />
            </Routes>
        </div>
    );
};

export default App;
