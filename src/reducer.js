export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCfadYMWmr_GU7n8xlijaYRyvmRVj3R1oa9TCSk1-djHXHN_Tf52J5hrF2gkzL4vUp28NtcdRsCpQDqwhIV6f6UrGG4hATkfgMd7XJYs0WSYXt1WUVdfvPHxYxOamIewRyS0cS7cyQPlRCXP9HqVRLNUWexajKZt7hA_BmUZvJFXs6rAlPuh-HkOo6r60D3xJQv1FL7FCIT_QwqEdQQ",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
