import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Info = ({ onClick, text, isDisplay }) => {
  return (
    <div className="container">
      <div
        className="alert alert-warning"
        onClick={onClick}
        style={{ display: !isDisplay ? 'none' : 'inline' }}>
        <strong>Warning: </strong>{text}
      </div>
    </div>
  )
}

Info.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isDisplay: PropTypes.bool.isRequired
}

export default connect()(Info)
