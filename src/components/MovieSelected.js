import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

/**
 * Popup styled component using React-player library to display youtube video.
 */
const MovieSelected = props => {
  let { trailerID } = props;
  let { title } = props;
  let url = `https://www.youtube.com/embed/${trailerID}`;
  return (
    <div className="trailer">
      <h2 className="trailer-title">{title}</h2>
      <button
        onClick={props.closePopup}
        className="btn btn--white btn--animated backbtn"
      >
        close me
      </button>
      <ReactPlayer className="trailer-video" url={url} playing />
    </div>
  );
};

MovieSelected.propTypes = {
  title: PropTypes.string.isRequired,
  trailerID: PropTypes.string.isRequired
};

export default MovieSelected;
