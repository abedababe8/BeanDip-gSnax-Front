import { combineReducers } from 'redux'
import { GET_ALL_SNAX, GET_ALL_REV } from './actions'

const INITIAL_VALUE = []

const reviewList = (state = [], action) => {
  console.log(state, action)
  switch(action.type){
    case GET_ALL_REV:
      return action.payload
    default:
      return state
  }
}
const list = (state = INITIAL_VALUE, action) => {
  console.log(state, action)
  switch(action.type){
    case GET_ALL_SNAX:
      return action.payload
    default:
      return state
  }
}


export default combineReducers({ list, reviewList })