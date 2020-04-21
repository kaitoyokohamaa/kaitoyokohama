import {ADD,REMOVE}from '../actions/add'

const initialState = {
    add :""
}
export function counterReducer(state = initialState, action){
    switch(action.type) {
      case ADD:
        return {
          ...state,
          add: 
        };
      case REMOVE:
        return {
          ...state,
          add: 
        };
      default:
        return state;
    }