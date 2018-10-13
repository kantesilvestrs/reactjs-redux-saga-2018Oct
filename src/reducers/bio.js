import { UPDATE_BIO, UPDATE_BIO_COMPLETE } from "../actions/bioActions";

export const bioReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_BIO:
      return { ...state, loading: true };
    case UPDATE_BIO_COMPLETE:
      return { ...state, bio: action.payload, loading: false };

    default:
      return state;
  }
};
