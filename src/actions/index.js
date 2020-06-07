export const SEARCH_TAG = 'SEARCH_TAG'
export const CLICK_ON_TAG = 'CLICK_ON_TAG'
export const GOTO_PAGE = 'GOTO_PAGE'
export const KEY_ENTER_UP = 'KEY_ENTER_UP'
export const REQUEST_GETS = 'REQUEST_GETS'
export const RECEIVE_GETS = 'RECEIVE_GETS'
const CLIENT_ID = 'kxFcWqxQgzwyAgCCTrBJJZm4caXqR_KlqbIjcwko6T8'

// NOTE: Action Creator

export const searchTag = (tag, curr_page) => {
  const query = { tag, curr_page }
  return {
    type: SEARCH_TAG,
    query
  }
}

export const clickOnTag = (tag, curr_page) => {
  const query = { tag, curr_page }
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
const fetchGets = (tag, curr_page) => dispatch => {
  console.log('***  calling fetchGets in action index')
  console.log('tag = ', tag)
  console.log('curr_page = ', curr_page)
  if (tag === '') {
    return {
      isFetching: false,
      didInvalidate: false,
      photos: []
    }
  }
  dispatch(requestGets(tag, curr_page))
  return fetch(`https://api.unsplash.com/search/photos?`
    + `client_id=${CLIENT_ID}`
    + `&page=${curr_page}&per_page=12&auto=format&query=${tag}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveGets(tag, json))
    })
}

const requestGets = (tag, curr_page) => ({
  type: REQUEST_GETS,
  tag,
  curr_page
})

const receiveGets = (tag, json) => {
  console.log('******** receiveGets')
  return {
    type: RECEIVE_GETS,
    tag,
    json,
    recievedAt: Date.now()
  }
}

const shouldFetchGets = state => {
  console.log('***  calling shouldFetchGets in action index')
  console.log('state = ', state)
  const { photoList } = state

  return !photoList.isFetching
}

export const fetchGetsIfNeeded = (tag, curr_page) => (dispatch, getState) => {
  console.log('***  calling fetchGetsIfNeeded in actions');

  if (shouldFetchGets(getState())) {
    console.log('calling dispatch(fetchGets(tag, curr_page)) in fetchGetsIfNeeded in actions');
    return dispatch(fetchGets(tag, curr_page))
  }
}
