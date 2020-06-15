import { SEARCH_TAG, CLICK_ON_TAG } from "../actions"

export const searchRecuder = (state = { tag: '', currPage: 1 }, action) => {
  const { query } = action
  switch (action.type) {
    case SEARCH_TAG:
    case CLICK_ON_TAG:
      return {
        ...state,
        tag: query.tag,
        currPage: query.currPage
      }
    default:
      return state
  }
}