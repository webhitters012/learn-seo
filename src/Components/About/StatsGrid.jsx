import React, { useEffect, useState } from 'react';
import './StatsGrid.css'; // Import CSS
import { FaUserGraduate, FaProjectDiagram, FaUserTie, FaCalendarAlt } from 'react-icons/fa';

const statsData = [
  { id: 1, target: 500, label: 'Candidates Trained', icon: <FaUserGraduate /> },
  { id: 2, target: 100, label: 'Live projects', icon: <FaProjectDiagram /> },
  { id: 3, target: 30, label: 'Professionals', icon: <FaUserTie /> },
  { id: 4, target: 2008, label: 'Since', icon: <FaCalendarAlt /> },
];

export default function StatsGrid() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const speed = 2000; // Total duration for animation
    let maxTarget = Math.max(...statsData.map((stat) => stat.target));
    let timeouts = [];

    statsData.forEach((stat, index) => {
      let increment = stat.target / speed;

      const updateCount = () => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          let currentCount = newCounts[index];

          if (currentCount < stat.target) {
            newCounts[index] = Math.ceil(currentCount + increment);
            return newCounts;
          } else {
            newCounts[index] = stat.target;
            return newCounts;
          }
        });

        if (counts[index] < stat.target) {
          const timeout = setTimeout(updateCount, speed / maxTarget);
          timeouts.push(timeout);
        }
      };

      const initialTimeout = setTimeout(updateCount, 100);
      timeouts.push(initialTimeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [counts]);

  return (
    <div className="stats-container">
      {statsData.map((item, index) => (
        <div key={item.id} className="stat-box-wrapper">
          <div className="stat-box">
            <div className="content">
              <div className="stat-icon">{item.icon}</div>
              <span className="stat-number">
                {counts[index]}
                {item.id !== 4 && <span>+</span>}
              </span>
            </div>
          </div>
          <span className="stat-label">{item.label}</span> {/* Label outside */}
        </div>
      ))}
    </div>
  );
}
