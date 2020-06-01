import React, { Component } from 'react';
import Photo from '../components/Photo';
import { fetchGetsIfNeeded } from '../actions';
import { connect } from 'react-redux';

class Photos extends Component {

  componentDidMount() {
    console.log('calling componentDidMount() in Photos')
    const { dispatch, query } = this.props;
    console.log('this.props = ', this.props);
    dispatch(fetchGetsIfNeeded(query.tag, query.curr_page))
  }

  componentDidUpdate(prevProps) {
    console.log('calling componentDidUpdate() in Photos and prevProps = ', prevProps)
    if (prevProps.query !== this.props.query) {
      const { dispatch, query } = this.props;
      dispatch(fetchGetsIfNeeded(query.tag, query.curr_page))
    }
  }

  render() {

    const { photos } = this.props
    console.log('in Photos render() and this.props = ', this.props)

    return (
      <div className="container">
        <div className="album">
          {photos.map((photo, index) => (
            <Photo key={index} {...photo} />
          ))}
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const { query, getsByQuery } = state
  console.log('calling mapStateToProps in Album containers and state = ', state);
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
