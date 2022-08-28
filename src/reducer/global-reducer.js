const initialState = {
  items: [],
  project: {},
  errorStatus: "",
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ITEMS":
      return {
        ...state,
        items: action.value,
      };
    case "UPDATE_PROJECT":
      return {
        ...state,
        project: action.value,
      };
    case "ERROR_PROJECT":
      return {
        ...state,
        errorStatus: action.value,
      };
    default:
      return state;
  }
};
export default global;
