import React, { Component } from 'react';
import Photo from '../components/Photo';
import { fetchGetsIfNeeded } from '../actions';
import { connect } from 'react-redux';

class Photos extends Component {

  componentDidUpdate(prevProps) {

    if (prevProps.query.tag !== this.props.query.tag
      || prevProps.query.curr_page !== this.props.query.curr_page) {
      const { dispatch, query } = this.props;
      dispatch(fetchGetsIfNeeded(query.tag, query.curr_page))
    }
  }

  render() {

    const { photos } = this.props

    return (
      <div className="container">
        <div className="album">
          {photos.map(photo => (
            <Photo key={photo.id} {...photo} />
          ))}
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const { searchBar, photoList } = state
  const { isFetching, didInvalidate, photos } = photoList
  const { tag, curr_page } = searchBar

  return {
    photos,
    query: { tag, curr_page },
    isFetching,
    didInvalidate
  }
}

export default connect(mapStateToProps)(Photos)
