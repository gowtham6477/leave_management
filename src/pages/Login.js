import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "employee") navigate("/employee");
    else if (role === "manager") navigate("/manager");
    else navigate("/chief");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Login</h2>

      <input placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <br /><br />

      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="employee">Employee</option>
        <option value="manager">Manager</option>
        <option value="chief">Chief Manager</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;