import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { fetchGetsIfNeeded, searchQuery } from '../actions';


class SearchBar extends Component {

  componentDidMount() {
    console.log('calling componentDidMount() in SearchBar')
    const { dispatch, query } = this.props;
    console.log('this.props = ', this.props);
    dispatch(fetchGetsIfNeeded(query.tag, query.curr_page))
  }

  componentDidUpdate(prevProps) {
    console.log('calling componentDidUpdate() in SearchBar and prevProps = ', prevProps)
    if (prevProps.query !== this.props.query) {
      const { dispatch, query } = this.props;
      dispatch(fetchGetsIfNeeded(query.tag, query.curr_page))
    }
  }

  // handleSubmit = (tag, curr_page) => {
  //   this.props.dispatch(searchQuery(tag, curr_page))
  // }

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
          dispatch(searchQuery(textInput.value, 1))
        }}>
          <div className="container">
            <div className="row">
              <div id="custom-search-input">
                <div className="input-group col-md-12">
                  <input
                    type="text"
                    ref={node => (textInput = node)}
                    className="search-query form-control"
                    // onKeyUp={() => dispatch(keyEnterUpListner(textInput.value))}
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

// const mapStateToProps = state => {
//   console.log('calling mapStateToProps in SearchBar and state = ', state)
//   const { query, getsByQuery } = state
//   const { isFetching, lastUpdated, items: photos }
//     = getsByQuery[query] || { isFetching: true, items: [] }
//   return {
//     query, photos, isFetching, lastUpdated
//   }
// }

// export default connect(mapStateToProps)(SearchBar)
export default SearchBar
