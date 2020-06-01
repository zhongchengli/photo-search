import React from 'react';
import Photo from './Photo';

const Photos = props => {

  const { query,
    photos,
    isFetching,
    lastUpdated } = props
  console.log('query = ', query)
  console.log('photos = ', photos)
  console.log('isFetching = ', isFetching)
  console.log('lastUpdated = ', lastUpdated)

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

export default Photos