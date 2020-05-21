import React from 'react'

export const Tags = props => {

  const capitalize = (s) => {
    if (typeof s !== 'string') {
      return ''
    }
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  let titles = [];

  const currentSearch = capitalize(props.currentSearch)

  props.photoResults.forEach(photo => {
    photo.tags.forEach(tag => {
      titles.push(tag.title)
    })
  })

  titles = titles.filter((value, index) => titles.indexOf(value) === index).map(title => capitalize(title))

  const tags = titles.map((title, index) => {
    return <button type="button" className="btn btn-default tag" key={index.toString()}>{title}</ button>
  })

  return (
    <div className="tags">
      <h1>{currentSearch}</h1>
      <p className="tag">
        {tags}
      </p>
    </div >)
}