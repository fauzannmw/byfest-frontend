import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Youtube.scss";

class Youtube extends Component {
  render() {
    const opts = {
      height: "640",
      width: "1140",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div className="youtube">
        <YouTube videoId="rKIBiJt6EF8" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;
