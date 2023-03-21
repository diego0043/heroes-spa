import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../../assets/imgNavBar.png";
import "material-icons/iconfont/material-icons.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <Link className="navbar-brand ms-5" to="/">
        <img className="" src={img} alt="" />
      </Link>

      <div className="navbar-collapse me-5 d-flex d-flex flex-row-reverse">
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
  );
};
