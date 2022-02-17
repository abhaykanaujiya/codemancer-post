const INITIAL_STATE = {
  gifyData: [],
  searchData: [],
  selectedData: [],
  searchText: "",
  isopen:false
};
export const BlogRducers = (state = { INITIAL_STATE }, action) => {
  switch (action.payload) {
    case "GET_GIF":
      return {
        ...state,
        gifyData: action.payload,
      };

    default:
      return state;
  }
};
