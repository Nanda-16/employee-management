import { NavLink, Outlet } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";

function LoginLayout() {
  return (
    <>
      <Box sx={{ flexGrow: 1, paddingBottom: "20px" }}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ color: "black" }}>
              Employee Manager
            </Typography>
            <div style={{ display: "flex" }}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black fw-semibold" : "text-secondary "
                }
              >
                <div className={"col mx-2"}>Login</div>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-black fw-semibold" : "text-secondary "
                }
              >
                <div className={"col mx-2"}>Register</div>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>{" "}
      </Box>

      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
}

export default LoginLayout;
