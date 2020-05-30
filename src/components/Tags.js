import React from 'react'
import Tab from './Tag'

const Tags = ({ tags, clickOnTag }) => {
  return (
    <div className="tags">
      {/* <h1>{currentSearch}</h1> */}
      {
        tags.map((tag, index) =>
          <Tab key={index} {...tag.title}
            onClick={() => clickOnTag(tag.title)} />)
      }
    </div >
  )
}

export default Tags