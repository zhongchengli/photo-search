import React from 'react'
import { searchTag, keyEnterUpListner } from '../actions'
import { connect } from 'react-redux'


const SearchBar = ({ dispatch }) => {

  let textInput

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!textInput.value.trim()) {
          return
        }
        dispatch(searchTag(textInput.value))
      }}>
        <div className="container">
          <div className="row">
            <div id="custom-search-input">
              <div className="input-group col-md-12">
                <input
                  type="text"
                  ref={node => (textInput = node)}
                  className="search-query form-control"
                  onKeyUp={() => dispatch(keyEnterUpListner(textInput.value))}
                  placeholder="Search" />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="submit">
                    <span className=" glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form >
    </div >)
}

export default connect()(SearchBar)
