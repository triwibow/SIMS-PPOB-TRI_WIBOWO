import React from "react";

const Navbar = () => {
  return(
    <nav className="navbar-border-bottom">
      <div className="navbar-app container desktop">
        <div className="navbar-app-brand">
          <a href={"/"}>
            <h1 className="text-xl text-gradient fw-bold">CryptoBit</h1>
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