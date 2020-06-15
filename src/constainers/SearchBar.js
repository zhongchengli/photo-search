import React, { Component } from 'react'
import { searchTag } from '../actions';
import { connect } from 'react-redux';
import { FormControl, Button, Form } from 'react-bootstrap'


class SearchBar extends Component {

  render() {
    const { dispatch } = this.props

    let textInput

    return (
      <div>
        <Form inline onSubmit={e => {
          e.preventDefault()
          if (!textInput.value.trim()) {
            return
          }
          dispatch(searchTag(textInput.value, 1))
        }}>
          <FormControl type="text" ref={node => (textInput = node)} placeholder="Search" className="mr-sm-2" />
          <Button type="submit" variant="outline-info">Search</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(SearchBar)