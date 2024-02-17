import logo from "../assets/images/logo.svg";

export default function NavBar() {
  return (
    // Navbar container
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        //!Logo
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
        //!Navbar Toggler Button
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          //! Search Form
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            //! Login Dropdown
            <div className="btn-group ml-auto">
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li />
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
