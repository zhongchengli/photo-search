import { connect } from 'react-redux'
import Photos from '../components/Photos'

// const getPhotos = state => {
//   console.log('calling mapStateToProps in Album containers');
//   console.log('state = ', state)
//   return state.photos
// }

const mapStateToProps = state => {
  const { query, getsByQuery } = state
  const {
    isFetching,
    lastUpdated,
    items: photos
  } = getsByQuery[query.tag] || {
    isFetching: true,
    items: []
  }

  return {
    query,
    photos,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Photos)