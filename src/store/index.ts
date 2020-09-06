import userReducer from './user/userReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  userReducer
})

export default rootReducer
