import { watchBio } from "./bio";
import { watchSkills } from "./skills";
import { watchProjects } from "./projects";
import { all } from "redux-saga/effects";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchBio(), watchSkills(), watchProjects()]);
}
