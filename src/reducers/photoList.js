import { REQUEST_GETS, RECEIVE_GETS } from "../actions";
import { readJSON } from ".";

export const photoList = (state = {
  isFetching: false,
  didInvalidate: false,
  photos: []
}, action) => {

  console.log('***  calling photoList in reducer')
  console.log(' state = ', state)
  console.log(' action = ', action)

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
        photos: readJSON(action.json),
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}