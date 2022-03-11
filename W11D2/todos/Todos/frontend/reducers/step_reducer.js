import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";
// import { RECEIVE_TODO } from "../actions/todo_action";


const initialState = {
  1: {
    title: 'wash car',
    todo_id: 'with soap',
    done: false
  },
  2: {
    title: 'wash dog',
    todo_id: 'with shampoo',
    done: true
  },
}

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_STEPS:
      const stepsObj = {};
      action.steps.forEach(step => {
        stepsObj[step.id] = step;
      });
      return stepsObj;
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;
