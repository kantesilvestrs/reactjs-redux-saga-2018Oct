import { UPDATE_PROJECTS_COMPLETE } from "../actions/projectsActions";

const initialState = {
  projects: []
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS_COMPLETE:
      return { ...state, projects: action.payload };

    default:
      return state;
  }
};
