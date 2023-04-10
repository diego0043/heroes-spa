import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../../assets/imgNavBar.png";
import "material-icons/iconfont/material-icons.css";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";

export const Navbar = () => {
  const { state, logout } = useContext(AuthContext)

  const name = state.user?.name;

  const navigate = useNavigate();

  const handleBack = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand ms-3" to="/">
          <img className="" src={img} alt="" />
        </Link>
        <span className="ms-3">Welcome back, {name}</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse me-5 d-flex d-flex flex-row-reverse"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item d-none d-lg-block fw-normal ms-1 nav-link ${
                  isActive ? "active" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item d-none d-lg-block fw-normal ms-1 nav-link ${
                  isActive ? "active" : ""
                }`
              }
              to="/Heroes"
            >
              Heroes
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item d-none d-lg-block fw-normal ms-1 nav-link ${
                  isActive ? "active" : ""
                }`
              }
              to="/search"
            >
              Search
            </NavLink>
            <button
              onClick={handleBack}
              className="nav-item d-none d-lg-block fw-normal ms-1 nav-link btn-back"
            >
              Sing out
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
