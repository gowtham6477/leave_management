import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import ChiefManagerDashboard from "./pages/ChiefManagerDashboard";
import LeaveForm from "./pages/LeaveForm";
import MyLeaveReport from "./pages/MyLeaveReport";
import TeamReport from "./pages/TeamReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/chief" element={<ChiefManagerDashboard />} />
        <Route path="/apply-leave" element={<LeaveForm />} />
        <Route path="/my-report" element={<MyLeaveReport />} />
        <Route path="/team-report" element={<TeamReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;