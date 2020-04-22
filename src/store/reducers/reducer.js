import * as actionTypes from '../actions/actions'

const initialState = {
    value:[],
    todo :[]
}
 const reducer =(state = initialState, action) =>{ 
    switch(action.type) {
      case actionTypes.ADD:
       
        return {
          ...state,
          todo: state.todo.concat({id:new Date(),value:action.value})
        };
      case actionTypes.CHANGE:
        return {
          ...state,
          value:state.value=action.value
        };
      default:
        return state;
    }
}

export default reducer;
