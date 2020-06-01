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
  console.log('calling getsByQuery in reducer')
  console.log('state = ', state)
  console.log('action = ', action)
  switch (action.type) {
    case RECEIVE_GETS:
    case REQUEST_GETS:
      return {
        ...state,
        [action.query.tag]: gets(state[action.query], action)
      }
    default: {
      console.log('calling default in searchByTag and state = ', state);
      return state
    }
  }
}

const query = (state = { tag: '', curr_page: 1 }, action) => {
  console.log('calling query in reducer and state = ', state)
  console.log('action = ', action)
  const { query } = action
  switch (action.type) {
    case REQUEST_GETS:
      return {
        ...state,
        tag: query.tag,
        curr_page: query.curr_page
      }
    default:
      return state
  }
}


const searchPhotoApp = combineReducers({ getsByQuery, query })

export default searchPhotoApp