export const SEARCH_TAG = 'SEARCH_TAG'
export const CLICK_ON_TAG = 'CLICK_ON_TAG'
export const GOTO_PAGE = 'GOTO_PAGE'
export const KEY_ENTER_UP = 'KEY_ENTER_UP'
export const REQUEST_GETS = 'REQUEST_GETS'
export const RECEIVE_GETS = 'RECEIVE_GETS'
const CLIENT_ID = 'kxFcWqxQgzwyAgCCTrBJJZm4caXqR_KlqbIjcwko6T8'

// NOTE: Action Creator

export const searchTag = (tag, currPage) => {
  const query = { tag, currPage }
  return {
    type: SEARCH_TAG,
    query
  }
}

export const clickOnTag = (tag, currPage) => {
  const query = { tag, currPage }
  return {
    type: CLICK_ON_TAG,
    query
  }
}

export const gotoPage = (tag, page) => {
  const query = { tag, page }
  return {
    type: GOTO_PAGE,
    query
  }
}


// API call
const fetchGets = (tag, currPage) => dispatch => {
  if (tag === '') {
    return {
      isFetching: false,
      didInvalidate: false,
      photos: []
    }
  }
  dispatch(requestGets(tag, currPage))
  return fetch(`https://api.unsplash.com/search/photos?`
    + `client_id=${CLIENT_ID}`
    + `&page=${currPage}&per_page=12&auto=format&query=${tag}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveGets(tag, json))
    })
}

const requestGets = (tag, currPage) => ({
  type: REQUEST_GETS,
  tag,
  currPage
})

const receiveGets = (tag, json) => {
  return {
    type: RECEIVE_GETS,
    tag,
    json,
    recievedAt: Date.now()
  }
}

const shouldFetchGets = state => {
  const { photoReducer } = state

  return !photoReducer.isFetching
}

export const fetchGetsIfNeeded = (tag, currPage) => (dispatch, getState) => {

  if (shouldFetchGets(getState())) {
    return dispatch(fetchGets(tag, currPage))
  }
}
