import { REQUEST_GETS, RECEIVE_GETS } from "../actions";


const readJSON = json => {
  const obj = JSON.parse(JSON.stringify(json))
  console.log('obj = ', obj.results)
  return obj.results.map(result => JSON.parse(JSON.stringify(result)));
  // return
}

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