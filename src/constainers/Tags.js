import React from 'react'
import Tag from '../components/Tag'
import { useDispatch, useSelector } from 'react-redux'
import { clickOnTag } from '../actions'

const Tags = () => {
  const currentSearch = useSelector(state => {
    // @ts-ignore
    const { searchRecuder } = state;
    const { tag } = searchRecuder;
    return tag;
  })

  const tags = useSelector(state => {
    // @ts-ignore
    const { photoReducer } = state;

    const { photos } = photoReducer;
    let tags = [];
    photos.forEach(photo => {
      photo.tags.forEach(tag => {
        tags.push(tag.title)
      })
    })

    tags = tags.filter((value, index) =>
      tags.indexOf(value) === index).map(title =>
        capitalize(title))
    return tags;
  })

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="tags">
        <h1>{currentSearch}</h1>
        <p className="tag">
          {
            tags.map((tag, index) =>
              <Tag key={index} tag={tag}
                onClick={() => dispatch(clickOnTag(tag, 1))} />)
          }
        </p>
      </div>
    </div>
  )
}

const capitalize = (s) => {
  if (typeof s !== 'string') {
    return ''
  }
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default Tags;