import { combineReducers } from 'redux';
import { counterReducer } from './reducer';

const rootReducer = combineReducers({
  // 状態ごとのReducer
  counterReducer,
})

export default rootReducer;