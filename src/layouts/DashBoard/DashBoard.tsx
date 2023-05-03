import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className="border-bottom"
        style={{ background: "#373c40" }}
      >
        <Container fluid>
          <Navbar.Brand className="text-white me-4">
            Admin Template
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 mx-5 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
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
            </Nav>
            <Navbar.Text className="text-secondary ms-5">
              <div className="d-flex">
                <span>Welcome Muhammed Shafi P</span>
                <div className="ms-2" style={{ borderRadius: "50%" }}></div>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="p-10">
        <Outlet />
      </main>
    </>
  );
};

export default DashBoard;
