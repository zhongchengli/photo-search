import { REQUEST_GETS, RECEIVE_GETS } from "../actions";

export const photoReducer = (state = {
  isFetching: false,
  didInvalidate: false,
  photos: []
}, action) => {

  switch (action.type) {
    case REQUEST_GETS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_GETS:
      const jsonResult = JSON.parse(JSON.stringify(action.json))
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        photos: jsonResult.results,
        totalPages: jsonResult.total_pages,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}