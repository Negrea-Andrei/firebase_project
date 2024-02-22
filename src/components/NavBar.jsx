import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useAuthContext } from "../context/AuthContext";

const LogIn = () => {
  const { login, currentUser } = useAuthContext();
  return (
    !currentUser && (
      <button type="button" className="btn btn-warning" onClick={login}>
        Login
      </button>
    )
  );
};

const LogOut = () => {
  const { logout, currentUser } = useAuthContext();
  return (
    currentUser && (
      <button type="button" className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    )
  );
};

export default function NavBar({ placeholder, setPlaceholder, items, setItems }) {
  const { currentUser } = useAuthContext();
  const [text, setText] = useState(null);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      // If the search input is empty, set items to the placeholder
      setItems([...placeholder]);
    } else {
      // If the search input is not empty, filter items based on the input
      const filteredItems = placeholder.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setItems([...filteredItems]);
    }
  };

  const username = useMemo(() => {
    return currentUser?.displayName || "Profile";
  }, [currentUser]);

  const avatar = useMemo(() => {
    return !!currentUser ? (
      <img
        className="avatar"
        src={currentUser?.photoURL}
        alt="avatar"
        width={34}
        height={34}
      />
    ) : (
      "Login"
    );
  }, [currentUser]);

  return (
    <nav className="navbar navbar-expand-lg myNavbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/public">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/public">
              Public
            </Link>
          </li>
          {currentUser && (
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                My Polaroids
              </Link>
            </li>
          )}
        </ul>

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto" role="search" onSubmit={handleOnSubmit}>
            <input
              onChange={handleOnChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>

            <div className="btn-group ml-2">
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {avatar}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  {currentUser && (
                    <Link className="dropdown-item text-center" to="/profile">
                      {username}
                    </Link>
                  )}
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
