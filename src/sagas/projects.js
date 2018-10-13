import { UPDATE_PROJECTS, UPDATE_PROJECTS_COMPLETE } from "../actions/projectsActions";
import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* getProjects(action) {
  yield delay(1000);
  yield put({ type: UPDATE_PROJECTS_COMPLETE, payload: action.payload });
}

export function* watchProjects() {
  yield takeEvery(UPDATE_PROJECTS, getProjects);
}
