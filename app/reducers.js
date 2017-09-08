import { combineReducers } from 'redux'
import stream from './containers/webcam/reducers'

const rootReducer = combineReducers({
  stream: stream
})

export default rootReducer