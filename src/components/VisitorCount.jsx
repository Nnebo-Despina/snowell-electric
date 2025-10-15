import React, { useEffect, useState } from 'react'
import "../styles/VisitorCount.css";

const VisitorCount = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    // Only increment if this session hasn't been counted yet
    if (!hasVisited) {
      let count = localStorage.getItem("visitorCount");

      if (!count) {
        count = 1;
      } else {
        count = parseInt(count) + 1;
      }

      localStorage.setItem("visitorCount", count);
      sessionStorage.setItem("hasVisited", "true");
      setVisits(count);
    } else {
      // If already counted this session, just show the current value
      const existingCount = localStorage.getItem("visitorCount");
      setVisits(existingCount);
    }
  }, []);

    localStorage.removeItem("visitorCount");
    sessionStorage.removeItem("hasIncremented");

  return (
    <div className="visitor-container" onClick={() => {
        localStorage.removeItem("visitorCount");
        sessionStorage.removeItem("hasIncremented");
        window.location.reload();
    }}>
      <p>1</p>
    </div>
  );
};

export default VisitorCount;
