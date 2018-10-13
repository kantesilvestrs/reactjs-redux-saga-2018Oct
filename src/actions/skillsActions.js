/*
 * action types
 */

export const UPDATE_SKILLS = "UPDATE_SKILLS";
export const UPDATE_SKILLS_COMPLETE = "UPDATE_SKILLS_COMPLETE";

/*
 * action creators
 */

export function updateSkills(skills) {
  return { type: UPDATE_SKILLS, payload: skills };
}
