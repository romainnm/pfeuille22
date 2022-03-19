import React, { useContext } from "react";
import { PortfolioContext } from "../context/project-context";
/* Routing */
import { HashLink as Link } from "react-router-hash-link";
/* Icons */
import { HiMenu } from "react-icons/hi";
import logo from "./logo/logo.png";
/* Data */
import { navLinks, mobNavLinks } from "../utils/constants";

const Header = () => {
  const { currentNavID, getNavID, isToggleNavOpen, toggleNav, closeToggleNav } =
    useContext(PortfolioContext);

  return (
    <div>
      <header>
        {/* Website navigation */}
        <div className="header-container">
          <Link smooth to="/#top" onClick={closeToggleNav}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <nav className="main-nav">
            <ul className="nav-links" onClick={closeToggleNav}>
              {navLinks.map((link) => {
                const { id, name, url } = link;
                return (
                  <li key={id} className="nav-link">
                    <Link
                      to={url}
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                      alt={name}
                      className={`${
                        currentNavID === id ? "active-link" : null
                      }`}
                      onClick={() => getNavID(id)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            className={`${
              isToggleNavOpen
                ? "btn-nav-toggle toggle-active"
                : "btn-nav-toggle"
            }`}
            onClick={() => toggleNav()}
          >
            <HiMenu />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <nav
        className={`${
          isToggleNavOpen ? "mobile-nav show-mobile-nav" : "mobile-nav"
        }`}
      >
        <ul className="mobile-nav-links">
          {mobNavLinks.map((link) => {
            const { id, name, url } = link;
            return (
              <li key={id} className="mobile-nav-link ">
                <Link
                  to={url}
                  className={`${currentNavID === id ? "active-link" : null}`}
                  onClick={() => getNavID(id)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
