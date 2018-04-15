import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Allows user to input specific movies they are looking full and display them real time.
 */
class Search extends Component {
  handleSearchTermChange = e => {
    this.props.getSearchTerm(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <input
          onChange={this.handleSearchTermChange}
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}

Search.propTypes = {
  getSearchTerm: PropTypes.func
};

export default Search;
