import React from 'react';
import Photo from './Photo';

const Photos = ({ photos }) => {

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