import { combineReducers } from 'redux'
import stream from './components/webcam/reducers'

const rootReducer = combineReducers({
  stream: stream
})

export default rootReducer