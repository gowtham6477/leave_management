import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const navigate = useNavigate();

  const employee = {
    id: "EMP001",
    name: "Sangeetha",
    taken: 3,
    available: 9 - 3
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Welcome {employee.name}</h3>
      <p>ID: {employee.id}</p>

      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ border: "1px solid black", padding: 10 }}>
          Leaves Taken: {employee.taken}
        </div>

        <div style={{ border: "1px solid black", padding: 10 }}>
          Leaves Available: {employee.available}
        </div>
      </div>

      <br />

      <button onClick={() => navigate("/my-report")}>
        My Leave Report
      </button>

      <br /><br />

      <button onClick={() => navigate("/apply-leave")}>
        Apply for Leave
      </button>
    </div>
  );
}

export default EmployeeDashboard;