import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LogoutPage from "./pages/LogoutPage";
import BuildingsPage from "./pages/BuildingsPage";
import UsersPage from "./pages/UsersPage";
import BookingsPage from "./pages/BookingsPage";
import AddBuildingPage from "./pages/AddBuildingPage";
import PlacesPage from "./pages/PlacesPage";
import AddPlacePage from "./pages/AddPlacePage";
import UserSettingsPage from "./pages/UserSettingsPage";
import EditBuildingPage from "./pages/EditBuildingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/buildings" element={<BuildingsPage />} />
      <Route path="/buildings/new" element={<AddBuildingPage />} />
      <Route path="/buildings/:id/edit" element={<EditBuildingPage />} />
      <Route path="/buildings/:id/places" element={<PlacesPage />} />
      <Route path="/buildings/:id/add-place" element={<AddPlacePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/bookings" element={<BookingsPage />} />
      <Route path="/settings" element={<UserSettingsPage />} />
      <Route path="/logout" element={<LogoutPage />} />
    </Routes>
  );
}

export default App;
