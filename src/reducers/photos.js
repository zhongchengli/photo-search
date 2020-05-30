const photos = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_TAG': {
      const newState = [
        ...state,
        {
          photos,
          title: action.title,
        }
      ]
      return newState
    }
    case 'CLICK_ON_TAB': {
      const newState = [
        ...state,
        {
          photos,
          title: action.tag,
        }
      ]
      return newState
    }
    case 'GOTO_PAGE': {
      const newState = [
        ...state,
        {
          photos,
          page: action.page,
        }
      ]
      return newState
    }

    default:
      return state
  }

}