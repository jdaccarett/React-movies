import React from "react";
import MovieItem from "./MovieItem";
import PropTypes from "prop-types";

/**
 * Using the Searchterm props from < App /> it filters user input.
 * Also it passes down movie object to the <MovieItem /> child component.
 */
const MovieList = props => {
  return (
    <div className="movieList">
      {props.movies
        .filter(
          movie =>
            movie.title.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >=
            0
        )
        .map(movie => {
          return <MovieItem movie={movie} key={movie.trailerID} />;
        })}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
