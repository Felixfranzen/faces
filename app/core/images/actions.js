import { LOAD_IMAGES, SET_IMAGES, CREATE_IMAGE } from './constants'

export function loadImages(){
  return function(dispatch){
    // TODO: get images for real
    dispatch({ type: LOAD_IMAGES })

    const images = [
      {
        id: 1234,
        url: 'http://via.placeholder.com/350x150'
      }
    ]
    setTimeout(function(){
      dispatch({ type: SET_IMAGES, payload: images })
    }, 2500)
  }
}

export function createImage(imageData){
  return function(dispatch){

    dispatch({ type: LOAD_IMAGES })

    // TODO: send post request with data
    const image = { id: 1234, url: 'http://via.placeholder.com/350x150' }
    setTimeout(function(){
      dispatch({ type: CREATE_IMAGE, payload: image })
    }, 2500)
  }
}