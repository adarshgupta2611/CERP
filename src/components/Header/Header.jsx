import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/LoginStore";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
    dispatch(loginActions.changeIsAuthFalse())
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className={styles.header}>
      {/* <img style={{height: "20px"}} src="%PUBLIC_URL%/favicon.ico" alt="logo"></img> */}
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
                <a className="navbar-brand active text-light" aria-current="page" href={props.hrefText}>
                 {props.linkText}
                </a>
              </li>
              <span>|</span>
              <li className="nav-item">
                <a className="navbar-brand active text-light" href="/about">
                About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand active text-light" aria-current="page" href={props.hrefText2} onClick={handleLogout}>
                 {props.linkText2}
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
