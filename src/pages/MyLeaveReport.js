import { useEffect, useState } from "react";

function MyLeaveReport() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaves(all.filter(l => l.empId === "EMP001"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Leave Report</h2>

      {leaves.map(l => (
        <div key={l.id}>
          <p>{l.start} - {l.end}</p>
          <p>Status: {l.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyLeaveReport;