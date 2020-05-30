import React from 'react'

const Tag = ({ title, onClick }) => {
  return (
    <p className="tag">
      <button
        type="button"
        className="btn btn-default tag"
        onClick={onClick}>{title}</ button>
    </p>
  )
}

export default Tag