import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../Assets/Logo_Code.png";
import NavbarSearch from "../Pages/Home/Components/NavbarSearch";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const handleSignOut = () => {
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin keluar dari akun?"
    );

    if (!confirmed) return;

    setUser(null);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center">

        {/* LOGO */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center me-3">
          <img
            src={logo}
            width="40"
            height="40"
            className="me-2"
            style={{ borderRadius: "6px" }}
            alt="Logo CodeCatalyst"
          />
          <div className="typewriter">
            <span></span>
          </div>
        </NavLink>

        {/* SEARCH BAR (TENGAH) */}
        <div className="flex-grow-1 mx-5 d-none d-lg-block">
          <NavbarSearch />
        </div>

        {/* MENU */}
        <ul className="navbar-nav ms-auto d-flex flex-row gap-2 align-items-center">
          <li className="nav-item">
            <NavLink to="/" end className={navClass}>
              <i className="fa-solid fa-house me-1"></i> Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className={navClass}>
              <i className="fa-solid fa-circle-info me-1"></i> About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/courses" className={navClass}>
              <i className="fa-solid fa-book-open-reader me-1"></i> Courses
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/schedule" className={navClass}>
              <i className="fa-solid fa-calendar-days me-1"></i> Schedule
            </NavLink>
          </li>

          {!user && (
            <li className="nav-item">
              <NavLink to="/register" className="btn btn-accent">
                <i className="fa-solid fa-user-plus me-1"></i>
                Register
              </NavLink>
            </li>
          )}

          {user && (
            <li className="nav-item">
              <div className="navbar-user-wrapper">
                <span className="navbar-user-name text-light fw-semibold">
                  {user.name || user.email}
                </span>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm navbar-signout-btn"
                  onClick={handleSignOut}
                >
                  Keluar
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;