import { UPDATE_BIO, UPDATE_BIO_COMPLETE } from "../actions/bioActions";
import { put, takeEvery } from "redux-saga/effects";

export function* getBio(action) {
  console.log("bio1");
  const json = yield fetch("http://localhost:3001/api/bio").then(response =>
    response.json()
  );
  console.log("bio2");
  yield put({ type: UPDATE_BIO_COMPLETE, payload: json });
}

export function* watchBio() {
  yield takeEvery(UPDATE_BIO, getBio);
}
