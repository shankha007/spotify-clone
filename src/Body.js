import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ selectedPlaylist }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={selectedPlaylist?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{selectedPlaylist?.name}</h2>
          <p>{selectedPlaylist?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={() => playPlaylist(selectedPlaylist.id)}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="list">
          <div className="header-row">
            <div className="col">
              <span>#</span>
            </div>
            <div className="col">
              <span>TITLE</span>
            </div>
            <div className="col">
              <span>ALBUM</span>
            </div>
            <div className="col">
              <span>
                <WatchLaterIcon />
              </span>
            </div>
          </div>
          <div className="tracks">
            {selectedPlaylist?.tracks.items.map((item, index) => (
              <SongRow
                key={index}
                track={item.track}
                playSong={playSong}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
