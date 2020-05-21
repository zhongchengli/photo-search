import React from "react";

export const Photos = props => {

  const photos = props.photoResults.map((photo, index) => {
    return (
      <div className="photo" key={index.toString()}>
        <img src={photo.urls.small} className="img-thumbnail" alt={photo.alt_description} />
      </div>
    )
  })


  return (
    <div className="container">
      <div className="album">{photos}</div>
    </div>
  )
}