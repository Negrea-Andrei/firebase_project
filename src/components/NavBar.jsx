import { useAuthContext } from "../context/AuthContext";
import logo from "../assets/images/logo.svg";

const LogIn = () => {
  const {login, currentUser} = useAuthContext();
  return (
    !currentUser && <button type="button" className="btn btn-warning" onClick={login}>
      Login
    </button>
  );
};

const LogOut = () => {
  const {logout, currentUser} = useAuthContext();
  return (
    currentUser && <button type="button" className="btn btn-danger" onClick={logout}>
      Logout
    </button>
  );
};

export default function NavBar() {
  return (
    // Navbar container
    <nav className="navbar navbar-expand-lg myNavbar">
      <div className="container-fluid">
        {/* Logo */}
        <a
          className="navbar-brand"
          href="https://getbootstrap.com/docs/5.3/components/dropdowns/"
        >
          <img src={logo} alt="Logo" />
        </a>

        {/* Navbar Toggler Button */}
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

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Search Form */}
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>

            {/* Login Dropdown */}
            <div className="btn-group ml-2">
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item text-center"
                    href="https://firebase.google.com/docs/auth/web/google-signin"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="col d-flex flex-column justify-content-center">
                  <LogIn />
                  <LogOut />
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
