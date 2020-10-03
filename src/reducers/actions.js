/*
 * action types
 */

export const ADD_EXERCISE_DETAILS = 'ADD_EXERCISE_DETAILS';
export const ADD_EXERCISE_MINUTES = 'ADD_EXERCISE_MINUTES';
export const ADD_FRUITS_AND_VEGGIES = 'ADD_FRUITS_AND_VEGGIES';
export const ADD_MINDFULNESS_TIMES = 'ADD_MINDFULNESS_TIMES';
export const ADD_MODAL = 'ADD_MODAL';
export const ADD_SLEEP_HOURS = 'ADD_SLEEP_HOURS';
export const ADD_WATER_OZ = 'ADD_WATER_OZ';
export const REDEEM_ITEM = 'REDEEM_ITEM';
export const REMOVE_MODAL = 'REMOVE_MODAL';
export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';
export const SAVE_TO_DASHBOARD = 'SAVE_TO_DASHBOARD';

/*
 * other constants
 */


/*
 * action creators
 */

export function addExericseDetails(data){
  return {type: ADD_EXERCISE_DETAILS, data}
}

export function addExerciseMinutes(data) {
  return {type: ADD_EXERCISE_MINUTES, data}
}

export function addPoints(data){
  return {type: "ADD_POINTS", data}
}

export function addPointsDetails(data){
  return {type: "ADD_POINTS_DETAILS", data}
}

export function addMindfulnessTimes(data) {
  return {type: ADD_MINDFULNESS_TIMES, data}
}

export function addSelfCheckTimes(data) {
  return {type: "ADD_SELF_CHECK_TIMES", data}
}
export function addMammogram(data) {
  return {type: "ADD_MAMMOGRAM", data}
}

export function addSleepHours(data) {
  return {type: ADD_SLEEP_HOURS, data}
}

export function addWaterOz(data) {
  return {type: ADD_WATER_OZ, data}
}

export function addFruitsAndVeggies(data) {
  return {type: ADD_WATER_OZ, data}
}


export function saveCurrentUser(data) {
  return {type: SAVE_CURRENT_USER, data}
}

export function saveToDashboard(data) {
  return {type: SAVE_TO_DASHBOARD, data}
}

export function addModal(data) {
  return {type: ADD_MODAL, data}
}

export function removeModal() {
  return {type: REMOVE_MODAL}
}

export function redeemItem(data) {
  return {type: REDEEM_ITEM, data}
}