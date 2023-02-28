import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {

  return (
    <div className={styles.header}>
      <h1>College ERP</h1>

    {/* BootStrap Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="navbar-brand active text-light" aria-current="page" href="/">
                 Home
                </a>
              </li>
              <span>|</span>
              <li className="nav-item">
                <a className="navbar-brand active text-light" href="#">
                Contact Us
                </a>
              </li>
              <span>|</span>
              <li className="nav-item">
                <a className="navbar-brand active text-light" href="#">
                About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
