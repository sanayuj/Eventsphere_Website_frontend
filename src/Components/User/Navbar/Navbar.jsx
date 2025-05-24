import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg customNav">
      <div className="container-fluid">
        <a className="navbar-brand heading ms-5" href="#">EventSphere</a>

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

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4 me-5 ">
            <li className="nav-item">
              <a className="nav-link fs-7" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#">Hire</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

