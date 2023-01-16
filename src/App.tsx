import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/logout" element={<LogoutPage />} />
    </Routes>
  );
}

export default App;
