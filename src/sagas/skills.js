import { UPDATE_SKILLS, UPDATE_SKILLS_COMPLETE } from "../actions/skillsActions";
import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* getSkills(action) {
  yield delay(1000);
  yield put({ type: UPDATE_SKILLS_COMPLETE, payload: action.payload });
}

export function* watchSkills() {
  yield takeEvery(UPDATE_SKILLS, getSkills);
}
