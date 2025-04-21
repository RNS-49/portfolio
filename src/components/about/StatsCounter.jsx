import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import './about.css'
import { useInView } from "react-intersection-observer";

const StatsCounter = () => {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    } else {
      setStartCounting(false); // Reset when out of view
    }
  }, [inView]);

  const stats = [
    { number: 2, label: "Years Experience" },
    { number: 15, label: "Projects Completed" },
    { number: 5, label: "Internships/Jobs" },
  ];

  return (
    <div ref={ref} className="d-flex justify-content-around flex-wrap py-5 counter">
      {stats.map((stat, i) => (
        <div key={i} className="text-center m-3">
          <h1 style={{ fontSize: "2.5rem", color: "whitesmoke"}}>
            {startCounting ? (
              <CountUp end={stat.number} duration={6} />
            ) : (
              0
            )}
             {""} +
          </h1>
          <p className="mb-0 fw-semibold">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;