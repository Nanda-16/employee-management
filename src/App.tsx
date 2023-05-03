import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./pages/Employee/Employee";
import Designations from "./pages/Designations/Designations";
import LoginLayout from "./layouts/LoginLayout/LoginLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NoPage from "./pages/NoPage/NoPage";
import DashBoard from "./layouts/DashBoard/DashBoard";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/designations" element={<Designations />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
