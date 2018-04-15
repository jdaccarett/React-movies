import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

/**
 * Navbar component takes in filtering functions as props from
 * (most parent component) App.js and handles clicked filter button.
 */
const Navbar = props => {
  return (
    <header className="header">
      <div className="logo">hi5</div>
      <Search getSearchTerm={props.getSearchTerm} />
      <nav className="user-nav">
        <div className="user-nav__item" onClick={props.filterAlphabetically}>
          sort alpha
        </div>
        <div className="user-nav__item" onClick={props.filterStarwars}>
          sort starwars
        </div>
        <div className="user-nav__item" onClick={props.filterbyMarvel}>
          sort marvel
        </div>
        <div className="user-nav__item" onClick={props.filterByReleaseData}>
          sort date
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  filterAlphabetically: PropTypes.func.isRequired,
  filterByReleaseData: PropTypes.func.isRequired,
  filterStarwars: PropTypes.func.isRequired,
  filterbyMarvel: PropTypes.func.isRequired
};

export default Navbar;
