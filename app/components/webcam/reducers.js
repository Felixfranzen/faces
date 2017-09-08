import { SET_STREAM, GET_SCREENSHOT, CLEAR_SCREENSHOT } from './constants'

// TODO: ADD 'FAILED' STATE
const defaultState = {
  stream: null,
  activeScreenshot: null
}

// TODO ADD ERROR HANDLING
export default function(state = defaultState, action){
  switch (action.type){

    case SET_STREAM:
      return { ...state, stream: action.payload }

    case GET_SCREENSHOT:
      return { ...state, activeScreenshot: action.payload }

    case CLEAR_SCREENSHOT:
      return { ...state, activeScreenshot: null }

    default:
      return state
  }
}