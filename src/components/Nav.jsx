import React, { useState } from "react";
import "./styles/nav.css";

const Nav = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleChangeNav = () => {
    setIsShowMenu();
  };

  return (
    <header className="header">
      <a className="name" href="#">Banking</a>
      <nav className="navbar">
        <div className={`navbar__menu ${isShowMenu ? "show-menu" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a
                onClick={handleChangeNav}
                href="#banking"
                className="navbar__link"
              >
                Banking
              </a>
            </li>

            <li className="navbar__item">
              <a
                onClick={handleChangeNav}
                href="#rules"
                className="navbar__link"
              >
                Rules
              </a>
            </li>

            <li className="navbar__item">
              <a
                onClick={handleChangeNav}
                href="#tags"
                className="navbar__link"
              >
                Tags
              </a>
            </li>

            <li className="navbar__item">
              <a
                onClick={handleChangeNav}
                href="#receipts"
                className="navbar__link"
              >
                Receipts
              </a>
            </li>
          </ul>

          <i
            className="bx bx-x btn__close navbar__icon"
            onClick={() => setIsShowMenu(!isShowMenu)}
          ></i>
        </div>

        <div
          className="btn__open navbar__icon"
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
