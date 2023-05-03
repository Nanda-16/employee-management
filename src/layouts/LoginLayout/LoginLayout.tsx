import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        bg="white"
        className="border-bottom"
        style={{}}
      >
        <Container fluid>
          <Navbar.Brand className="fw-semibold me-4">
            Employee Manager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 mx-5 my-lg-0 ms-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
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
                  isActive
                    ? "text-black fw-semibold"
                    : "text-secondary fw-semibold"
                }
              >
                <div className={"col mx-2 "}>Register</div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="p-10">
        <Outlet />
      </main>
    </>
  );
}

export default LoginLayout;
