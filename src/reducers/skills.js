import { UPDATE_SKILLS_COMPLETE } from "../actions/skillsActions";

const initialState = {
  skills: []
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SKILLS_COMPLETE:
      return { ...state, skills: action.payload };

    default:
      return state;
  }
};
