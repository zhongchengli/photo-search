import { combineReducers } from 'redux'
import { REQUEST_GETS, RECEIVE_GETS } from '../actions'


const gets = (state = {
  isFetching: false,
  didInvalidate: false,
  photos: []
}, action) => {

  console.log('calling photos in reducer and state = ', state)

  switch (action.type) {
    case REQUEST_GETS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_GETS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.photos,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const getsByQuery = (state = {}, action) => {
  console.log('calling searchByTag in reducer')
  switch (action.type) {
    case RECEIVE_GETS:
    case REQUEST_GETS:
      return {
        ...state,
        [action.query]: gets(state[action.query], action)
      }
    default: {
      console.log('calling default in searchByTag and state = ', state);
      return state
    }
  }
}

const query = (state = { tag: '', curr_page: 1 }, action) => {
  switch (action.type) {
    default:
      return state
  }
}


const searchPhotoApp = combineReducers({ getsByQuery, query })

export default searchPhotoApp