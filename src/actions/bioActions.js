/*
 * action types
 */

export const UPDATE_BIO = "UPDATE_BIO";
export const UPDATE_BIO_COMPLETE = "UPDATE_BIO_COMPLETE";

/*
 * action creators
 */

export function updateBio(bio) {
  return { type: UPDATE_BIO, payload: bio };
}
