// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://main--playful-faun-d8ad4e.netlify.app/";

const clientId = "3c64433199e34391b341ec9580fdaaf9";

const scopes = [
  "user-read-email",
  "user-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-playback-position",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  " "
)}&response_type=token&show_dialog=true`;
