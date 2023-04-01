import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";

function Sidebar({ spotify }) {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const openPlayList = (playlistId) => {
    spotify.getPlaylist(playlistId).then((response) =>
      dispatch({
        type: "SET_PLAYLIST",
        selectedPlaylist: response,
      })
    );
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="sidebar_playlist">
        {playlists?.items?.map((playlist) => (
          <SidebarOption
            key={playlist.name}
            option={playlist.name}
            onClick={() => openPlayList(playlist.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
