import { useState } from "react";

function LeaveForm() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [reason, setReason] = useState("");

  const submitLeave = () => {
    const request = {
      id: Date.now(),
      empId: "EMP001",
      name: "Sangeetha",
      start,
      end,
      reason,
      status: "Pending"
    };

    let existing = JSON.parse(localStorage.getItem("leaves")) || [];
    existing.push(request);
    localStorage.setItem("leaves", JSON.stringify(existing));

    alert("Leave Request Sent!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Apply Leave</h2>

      <input type="date" onChange={(e) => setStart(e.target.value)} />
      <br /><br />

      <input type="date" onChange={(e) => setEnd(e.target.value)} />
      <br /><br />

      <textarea placeholder="Reason" onChange={(e) => setReason(e.target.value)} />
      <br /><br />

      <button onClick={submitLeave}>Submit Request</button>
    </div>
  );
}

export default LeaveForm;