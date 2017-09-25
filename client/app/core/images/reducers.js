import { LOAD_IMAGES, SET_IMAGES, CREATE_IMAGE } from './constants'

const defaultState = {
  loading: false,
  images: []
}

export default function(state = defaultState, action){
  console.log(action)
  switch (action.type){
    case LOAD_IMAGES:
      return { ...state, loading: true }

    case SET_IMAGES:
      return {
        loading: false,
        images: action.payload
      }

    case CREATE_IMAGE:
      return {
        ...state, images: [ ...state.images, action.payload ] }

    default:
      return state
  }
}