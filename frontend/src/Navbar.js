import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className=" btn btn-dark mx-3">Notes Application</button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {localStorage.getItem("id") ? (
              <>
                <li className="nav-item ">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      navigate(`/notes/${localStorage.getItem("id")}`);
                    }}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item ">
                  <button
                    onClick={() => {
                      localStorage.removeItem("id");
                      navigate("/");
                    }}
                    className="btn btn-dark"
                  >
                    Signout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ">
                <Link to="/" className="btn btn-dark">
                  Signin
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
