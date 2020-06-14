import React, { Component } from 'react'
import Tag from '../components/Tag'
import { connect } from 'react-redux'
import { clickOnTag } from '../actions'

class Tags extends Component {

  clickOnTag = (tag, curr_page) => {
    this.props.dispatch(clickOnTag(tag, curr_page))
  }

  render() {

    const currentSearch = this.props.tag

    const tags = this.props.tags

    return (
      <div className="container">
        <div className="tags">
          <h1>{currentSearch}</h1>
          <p className="tag">
            {
              tags.map((tag, index) =>
                <Tag key={index} tag={tag}
                  onClick={() => this.clickOnTag(tag, 1)} />)
            }
          </p>
        </div>
      </div>
    )
  }
}

const capitalize = (s) => {
  if (typeof s !== 'string') {
    return ''
  }
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const mapStateToProps = state => {
  const { searchBar, photoList } = state
  const { tag } = searchBar
  const { photos } = photoList

  let tags = [];

  photos.forEach(photo => {
    photo.tags.forEach(tag => {
      tags.push(tag.title)
    })
  })

  tags = tags.filter((value, index) =>
    tags.indexOf(value) === index).map(title =>
      capitalize(title))


  return {
    tag,
    tags
  }
}

export default connect(mapStateToProps)(Tags)