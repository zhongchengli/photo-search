import React from 'react'

const Tag = ({ tag, onClick }) => {

  return (
    <p className="tag">
      <button
        type="button"
        className="btn btn-default tag"
        onClick={onClick}>{tag}</ button>
    </p>
  )
}

export default Tag