import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, paddingBottom: "20px" }}>
        <AppBar sx={{ backgroundColor: "#373c40" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography variant="h6">Admin Template</Typography>
            <div style={{ display: "flex" }}>
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                  isActive ? "text-white fw-semibold" : "text-secondary"
                }
              >
                <span className="mx-2">Home</span>
              </NavLink>
              <NavLink
                to="/dashboard/employee"
                className={({ isActive }) =>
                  isActive ? "text-white fw-semibold" : "text-secondary"
                }
              >
                <span className="mx-2">Employees</span>
              </NavLink>
              <NavLink
                to="/dashboard/designations"
                className={({ isActive }) =>
                  isActive ? "text-white fw-semibold" : "text-secondary"
                }
              >
                <span className="mx-2">Designations</span>
              </NavLink>
            </div>
            <div className="d-flex">
              <span>Welcome Muhammed Shafi P</span>
              <div className="ms-2" style={{ borderRadius: "50%" }}></div>
            </div>
          </Toolbar>
        </AppBar>{" "}
      </Box>
      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
};

export default DashBoard;
