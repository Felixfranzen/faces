import { combineReducers } from 'redux'
import stream from './components/webcam/reducers'
import images from './core/images/reducers'

const rootReducer = combineReducers({
  stream: stream,
  images: images
})

export default rootReducer