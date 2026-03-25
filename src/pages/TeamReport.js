import { useEffect, useState } from "react";

function TeamReport() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setLeaves(JSON.parse(localStorage.getItem("leaves")) || []);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Team Report</h2>

      {leaves.map(l => (
        <div key={l.id}>
          <p>{l.empId} - {l.name} - {l.status}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamReport;