import { SEARCH_TAG } from "../actions"

export const searchBar = (state = { tag: '', curr_page: 1 }, action) => {
  const { query } = action
  switch (action.type) {
    case SEARCH_TAG:
      return {
        ...state,
        tag: query.tag,
        curr_page: query.curr_page
      }
    default:
      return state
  }
}

