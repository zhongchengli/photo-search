export const SEARCH_TAG = 'SEARCH_TAG'
export const CLICK_ON_TAG = 'CLICK_ON_TAG'
export const GOTO_PAGE = 'GOTO_PAGE'

export const searchTag = tag => {
  return {
    type: SEARCH_TAG,
    tag
  }
}

export const clickOnTag = tag => {
  return {
    type: CLICK_ON_TAG,
    tag
  }
}

export const gotoPage = page => {
  return {
    type: GOTO_PAGE,
    page
  }
}

export const REQUEST_GETS = 'REQUEST_GETS'

export const requestGets = (tag, page) => {
  return {
    type: REQUEST_GETS,
    tag,
    page
  }
}

export const RECEIVE_GETS = 'RECEIVE_GETS'

export const receiveGets = (tag, json) => {
  return {
    type: RECEIVE_GETS,
    tag,
    gets: json.data.children.map(child => child.data),
    recievedAt: Date.now()
  }
}
