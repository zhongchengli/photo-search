import React, { Component } from 'react'
import { searchTag } from '../actions';
import { connect } from 'react-redux';


class SearchBar extends Component {

  handleSubmit = (tag, curr_page) => {
    this.props.dispatch(searchTag(tag, curr_page))
  }

  render() {
    const { dispatch } = this.props

    let textInput

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!textInput.value.trim()) {
            return
          }
          dispatch(searchTag(textInput.value, 1))
        }}>
          <div className="container">
            <div className="row">
              <div id="custom-search-input">
                <div className="input-group col-md-12">
                  <input
                    type="text"
                    ref={node => (textInput = node)}
                    className="search-query form-control"
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
}

export default connect()(SearchBar)