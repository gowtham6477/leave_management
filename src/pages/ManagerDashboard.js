import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ManagerDashboard() {
  const [leaves, setLeaves] = useState([]);
  const navigate = useNavigate();

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
      <h2>Manager Dashboard</h2>

      {leaves.map(l => (
        <div key={l.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <p>{l.empId} - {l.name}</p>
          <p>{l.start} to {l.end}</p>
          <p>Reason: {l.reason}</p>
          <p>Status: {l.status}</p>

          <button onClick={() => updateStatus(l.id, "Approved")}>
            Approve
          </button>

          <button onClick={() => updateStatus(l.id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}

      <br />

      <button onClick={() => navigate("/team-report")}>
        My Team Report
      </button>

      <br /><br />

      <button onClick={() => navigate("/apply-leave")}>
        Apply Leave
      </button>
    </div>
  );
}

export default ManagerDashboard;