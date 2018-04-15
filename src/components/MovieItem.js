import React, { Component } from "react";
import MovieSelected from "./MovieSelected";
import PropTypes from "prop-types";

/**
 * Handles popup of trailer once the "view trailer button is clicked".
 * Displays each indivual movie with the props from <MovieList /> component.
 */
class MovieItem extends Component {
  state = {
    showPopup: false
  };

  /**
   * Toggle State of displayData (true of false) When event is clicked.
   * If true Redirect to display movie trailer Component.
   * @param NONE
   * @public
   */
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
    window.scrollTo(0, 0);
  };

  render() {
    // If Movie trailer is clicked display pop up of trailer
    // & render selected trailer video Component with props passed.
    return (
      <div className="movieList__item">
        <div className="movieList__item-movieName">
          <span>{this.props.movie.title}</span>
        </div>
        <img src={this.props.movie.poster} alt="movie poster" />
        <div className="movieList__item-date">{this.props.movie.released}</div>

        <div className="movieList__trailer">
          <a
            onClick={this.togglePopup}
            className="btn btn--white btn--animated"
          >
            View Trailer
          </a>
        </div>
        {this.state.showPopup ? (
          <MovieSelected
            trailerID={this.props.movie.trailerID}
            title={this.props.movie.title}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

MovieItem.propTypes = {
  movie: shape({
    poster: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    trailerID: PropTypes.string.isRequired,
    universe: PropTypes.string.isRequired
  }).isRequired
};

export default MovieItem;
