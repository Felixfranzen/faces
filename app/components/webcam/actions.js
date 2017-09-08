import { SET_STREAM, GET_SCREENSHOT, CLEAR_SCREENSHOT } from './constants'

// TODO ADD ERROR HANDLING
export function requestStream(){
  return function(dispatch){
    const constraints = { video: true }
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      dispatch({ type: SET_STREAM, payload: stream })
    })
  }
}

export function getScreenshot(imageData){
  return {
    type: GET_SCREENSHOT,
    payload: imageData
  }
}

export function clearScreenshot(){
  return {
    type: CLEAR_SCREENSHOT
  }
}