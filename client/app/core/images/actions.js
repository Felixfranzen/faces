import { LOAD_IMAGES, SET_IMAGES, CREATE_IMAGE } from './constants'
import axios from 'axios'

export function loadImages(){
  return function(dispatch){
    // TODO: get images for real
    dispatch({ type: LOAD_IMAGES })

    const images = [
      {
        id: '1234',
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
    return axios.post(`${API_URL}/images`, { image: imageData })
      .then((response) => {
        dispatch({ type: CREATE_IMAGE, payload: response.data })

        // pass the image to the rest of the resolve chain
        return response.data
      })
  }
}