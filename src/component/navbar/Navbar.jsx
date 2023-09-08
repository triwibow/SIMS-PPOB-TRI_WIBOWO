import React from "react";
import logo from '../../assets/icons/logo.png'

const Navbar = () => {
  return(
    <nav className="navbar-border-bottom">
      <div className="navbar-app container desktop">
        <div className="navbar-app-brand">
          <a href={"/"} className="d-flex align-items-center navbar-app-link">
            <img 
              src={logo}
              alt="logo"
            />
            <span className="text-app-lg fw-bold ms-2">SIMS PPOB</span>
          </a>
        </div>
        <div className="navbar-app-collapse">
          <ul className="navbar-app-nav">
            <li className="navbar-app-item">
              <a href={"/"} className="navbar-app-link">
                Topup
              </a>
            </li>
            <li className="navbar-app-item">
              <a href={"/artworks"} className="navbar-app-link">
                Transaction
              </a>
            </li>
            <li className="navbar-app-item">
              <a href={"/"} className="navbar-app-link">
                Akun
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;