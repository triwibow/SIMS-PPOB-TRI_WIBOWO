import React from "react";
import logo from '../../assets/icons/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="navbar-border-bottom">
      <div className="navbar-app container desktop">
        <div className="navbar-app-brand">
          <Link to={"/"} className="d-flex align-items-center navbar-app-link">
            <img 
              src={logo}
              alt="logo"
            />
            <span className="text-app-lg fw-bold ms-2">SIMS PPOB</span>
          </Link>
        </div>
        <div className="navbar-app-collapse">
          <ul className="navbar-app-nav">
            <li className="navbar-app-item">
              <Link to={"/topup"} className="navbar-app-link">
                Topup
              </Link>
            </li>
            <li className="navbar-app-item">
              <Link to={"/transaction"} className="navbar-app-link">
                Transaction
              </Link>
            </li>
            <li className="navbar-app-item">
              <Link to={"/account"} className="navbar-app-link">
                Akun
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;