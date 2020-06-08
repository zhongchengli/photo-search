import React from 'react'

const Tag = ({ tag, onClick }) => {

  return (
    <button
      type="button"
      className="btn btn-default tag"
      onClick={onClick}>{tag}</ button>
  )
}

export default Tag