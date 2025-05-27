import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg customNav">
      <div className="container-fluid">
        <a className="navbar-brand heading ms-5" href="#"> <i class="bi bi-stop-circle me-2"></i>EventSphere</a>

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
              <a className="nav-link fs-7" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#event">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#hire">Hire</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

