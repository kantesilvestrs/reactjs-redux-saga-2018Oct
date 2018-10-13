import { combineReducers } from "redux";
import { bioReducer } from "./bio";
import { skillsReducer } from "./skills";
import { projectsReducer } from "./projects";

export const rootReducer = combineReducers({
  bioReducer, skillsReducer, projectsReducer
});
