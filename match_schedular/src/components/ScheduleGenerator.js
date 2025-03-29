import React from "react";
import { motion } from "framer-motion";

const ScheduleGenerator = ({ teams, venues, format }) => {
    const generateSchedule = () => {
        let schedule = [];
        if (format === "round-robin") {
            for (let i = 0; i < teams.length - 1; i++) {
                schedule.push({
                    match: `${teams[i]} vs ${teams[i + 1]}`,
                    venue: venues[i % venues.length],
                });
            }
        }
        return schedule;
    };

    const schedule = generateSchedule();

    return (
        <div>
            <h2>Generated Schedule</h2>
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {schedule.map((game, index) => (
                    <motion.li key={index} whileHover={{ scale: 1.1 }}>
                        {game.match} at {game.venue}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default ScheduleGenerator;
