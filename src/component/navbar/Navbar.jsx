import React from "react";
import logo from '../../assets/icons/logo.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const { pathname } = useLocation()

  const path = pathname.replaceAll('/', '')

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
              <Link to={"/topup"} className={`navbar-app-link ${path == 'topup' && 'active'}`}>
                Topup
              </Link>
            </li>
            <li className="navbar-app-item">
              <Link to={"/transaction"} className={`navbar-app-link ${path == 'transaction' && 'active'}`}>
                Transaction
              </Link>
            </li>
            <li className="navbar-app-item">
              <Link to={"/account"} className={`navbar-app-link ${path == 'account' && 'active'}`}>
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