import { useState, useEffect } from "react";

function ChiefManagerDashboard() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setLeaves(JSON.parse(localStorage.getItem("leaves")) || []);
  }, []);

  const updateStatus = (id, status) => {
    let updated = leaves.map(l =>
      l.id === id ? { ...l, status } : l
    );

    setLeaves(updated);
    localStorage.setItem("leaves", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chief Manager Dashboard</h2>

      {leaves.map(l => (
        <div key={l.id}>
          <p>{l.empId} - {l.name}</p>
          <p>{l.status}</p>

          <button onClick={() => updateStatus(l.id, "Approved")}>
            Approve
          </button>

          <button onClick={() => updateStatus(l.id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChiefManagerDashboard;