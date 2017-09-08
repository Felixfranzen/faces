import { SET_STREAM, CLEAR_STREAM, REQUEST_STREAM } from './constants'

export function clearStream(){
  return function(dispatch, getState){
    const { stream, videoSrc } = getState().stream
    if (!(stream && videoSrc)){
      return null
    }

    stream.getVideoTracks().map(tracks => tracks.stop())
    dispatch({ type: CLEAR_STREAM })
  }
}

export function requestStream(){
  return function(dispatch){
    dispatch({ type: REQUEST_STREAM })
    const constraints = { video: true }
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      dispatch({ type: SET_STREAM, payload: stream })
    })
  }
}