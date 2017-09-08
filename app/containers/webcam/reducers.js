import { SET_STREAM, CLEAR_STREAM, REQUEST_STREAM } from './constants'

const defaultState = {
  stream: null,
  videoSrc: null,
  requesting: false
}

export default function(state = defaultState, action){
  switch (action.type){
    case SET_STREAM:
      return {
        stream: action.payload,
        videoSrc: window.URL.createObjectURL(action.payload),
        requesting: false
      }

    case CLEAR_STREAM: {
      return defaultState
    }

    case REQUEST_STREAM:
      return { ...state, requesting: true }

    default:
      return state
  }
}