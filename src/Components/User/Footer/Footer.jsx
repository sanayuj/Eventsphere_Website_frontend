import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div> <nav className="navbar navbar-expand-lg customFooter">
      <div className="container-fluid">
        <a className="navbar-brand footer ms-5" href="#">&copy;
          2025 EventSphere. All rights reserved.</a>

        <div className="collapse navbar-collapse customFooter" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4 me-5 ">
            <li className="nav-item">
              <a className="nav-link fs-7 " href="#">Terms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7 " href="#">Privacy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-7 " href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav></div>
  )
}

export default Footer