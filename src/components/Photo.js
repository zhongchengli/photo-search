import React from 'react'
import PropTypes from 'prop-types'

const Photo = ({ urls, alt_description }) => {
  return (
    <div className="photo">
      <img src={urls.small} className="img-thumbnail" alt={alt_description} />
    </div>
  )
}

Photo.propType = {
  urls: PropTypes.object.isRequired,
  alt_description: PropTypes.string.isRequired
}

export default Photo
