/*
 * action types
 */

export const UPDATE_PROJECTS = "UPDATE_PROJECTS";
export const UPDATE_PROJECTS_COMPLETE = "UPDATE_PROJECTS_COMPLETE";

/*
 * action creators
 */

export function updateProjects(projects) {
  return { type: UPDATE_PROJECTS, payload: projects };
}
