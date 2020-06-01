export const SEARCH_TAG = 'SEARCH_TAG'
export const CLICK_ON_TAG = 'CLICK_ON_TAG'
export const GOTO_PAGE = 'GOTO_PAGE'
export const KEY_ENTER_UP = 'KEY_ENTER_UP'
export const REQUEST_GETS = 'REQUEST_GETS'
export const RECEIVE_GETS = 'RECEIVE_GETS'
const CLIENT_ID = 'kxFcWqxQgzwyAgCCTrBJJZm4caXqR_KlqbIjcwko6T8'

// NOTE: Action Creator

export const searchQuery = (tag, curr_page) => {
  const query = { tag, curr_page }
  return {
    type: REQUEST_GETS,
    query
  }
}

export const clickOnTag = tag => {
  return {
    type: CLICK_ON_TAG,
    tag
  }
}

export const gotoPage = curr_page => {
  return {
    type: GOTO_PAGE,
    curr_page
  }
}

export const keyEnterUpListner = tag => {
  return {
    type: KEY_ENTER_UP,
    tag
  }
}


// API call
const fetchGets = (tag, curr_page) => dispatch => {
  console.log('calling fetchGets in action index')
  console.log('tag = ', tag)
  console.log('curr_page = ', curr_page)
  if (tag === '') {
    return
  }
  dispatch(requestGets(tag, curr_page))
  return fetch(`https://api.unsplash.com/search/photos?`
    + `client_id=${CLIENT_ID}`
    + `&page=${curr_page}&per_page=12&auto=format&query=${tag}`)
    .then(response => response.json())
    .then(json => {
      console.log('json: ', json)
      dispatch(receiveGets(tag, json))
    })
}

const requestGets = (tag, curr_page) => ({
  type: REQUEST_GETS,
  tag,
  curr_page
})

const receiveGets = (tag, json) => {
  return {
    type: RECEIVE_GETS,
    tag,
    gets: json.data.children.map(child => child.data),
    recievedAt: Date.now()
  }
}

const shouldFetchGets = state => {
  console.log('calling shouldFetchGets in action index and state = ', state)
  const { query } = state
  console.log('query = ', query)
  const gets = state.getsByQuery[query.tag]

  if (!gets) {
    return true
  }
  if (gets.isFetching) {
    return false
  }
}

export const fetchGetsIfNeeded = (tag, curr_page) => (dispatch, getState) => {
  console.log('calling fetchGetsIfNeeded in actions');
  if (shouldFetchGets(getState())) {
    console.log('calling dispatch(fetchGets(tag, curr_page)) in fetchGetsIfNeeded in actions');
    return dispatch(fetchGets(tag, curr_page))
  }
}
