import React from "react";

import "./SongRow.css";

function SongRow({ track, playSong, index }) {
  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <div className="col">
        <span>{index + 1}</span>
      </div>
      <div className="col songRow__info">
        <div className="image">
          <img
            className="songRow__album"
            src={track.album.images[0].url}
            alt=""
          />
        </div>
        <div className="info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          </p>
        </div>
      </div>
      <div className="col">
        <span>{track.album.name}</span>
      </div>
      <div className="col">
        <span>{msToMinutesAndSeconds(track.duration_ms)}</span>
      </div>
    </div>
  );
}

export default SongRow;
