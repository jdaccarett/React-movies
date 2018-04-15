import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

/**
 * App component handles fetches movies from api and sets them as its state.
 * The filtering functions will update the filteredMovies state.
 * To minimize making multiple fetches to API I am caching movies state to
 * update the filtered movies once a different filter choice is applied.
 */
class App extends Component {
  state = {
    filteredMovies: [],
    movies: [],
    searchTerm: ""
  };

  componentDidMount() {
    this.fetchMovies();
  }

  /**
   * Calls movies API and sets movies & filteredMovies state.
   *
   * @param NONE
   * @public
   */
  fetchMovies = () => {
    axios
      .get("https://api.myjson.com/bins/iapkn")
      .then(res => {
        this.setState({ movies: res.data, filteredMovies: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * Callback function to be passed down to <Search /> component.
   * This will allow us to set searchTerm and pass it down to < MovieList />
   * component to allow filtering of movies by Search.
   * @param {string}
   * @public
   */
  getSearchTerm = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };

  /**
   * Returns and array of movies filtered alphabetically & sets the filteredMovies state
   * @param NONE
   * @public
   */
  filterAlphabetically = () => {
    const cache = this.state.movies;
    let alphabetically = cache;

    let alphaSorted = alphabetically.sort((a, b) =>
      a.title.toUpperCase().localeCompare(b.title.toUpperCase())
    );

    this.setState({
      filteredMovies: alphaSorted
    });
  };

  /**
   * Returns and array of movies filtered by starwars only & sets the filteredMovies state
   * @param NONE
   * @public
   */
  filterStarwars = () => {
    const cache = this.state.movies;
    const starwarsMovies = cache;
    let starwarsSorted = starwarsMovies.filter(
      movie => movie.universe === "starwars"
    );

    this.setState({
      filteredMovies: starwarsSorted
    });
  };

  /**
   * Returns and array of movies filtered by marvel only & sets the filteredMovies state
   * @param NONE
   * @public
   */
  filterbyMarvel = () => {
    const cache = this.state.movies;
    const marvelMovies = cache;
    let sortedMarvel = marvelMovies.filter(
      movie => movie.universe === "marvel"
    );

    this.setState({ filteredMovies: sortedMarvel });
  };

  /**
   * Returns and array of movies filtered by release date & sets the filteredMovies state
   * @param NONE
   * @public
   */
  filterByReleaseData = () => {
    const cache = this.state.movies;
    let releasedDate = cache;

    let releasedSorted = releasedDate.sort(function(a, b) {
      var c = new Date(a.released);
      var d = new Date(b.released);
      return c - d;
    });

    this.setState({
      filteredMovies: releasedSorted
    });
  };

  render() {
    return (
      <div>
        <Navbar
          filterStarwars={this.filterStarwars}
          filterbyMarvel={this.filterbyMarvel}
          filterByReleaseData={this.filterByReleaseData}
          filterAlphabetically={this.filterAlphabetically}
          getSearchTerm={this.getSearchTerm}
        />
        <MovieList
          ClassName="movieList"
          searchTerm={this.state.searchTerm}
          movies={this.state.filteredMovies}
        />
      </div>
    );
  }
}

export default App;
