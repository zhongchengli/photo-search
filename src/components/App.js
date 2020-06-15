import React from 'react'
// import Info from "./Info"
import Photos from '../constainers/Photos'
import Tags from '../constainers/Tags'
import Navigation from './Navigation'
import Pages from '../constainers/Pages'

const App = () => {
  return (
    <div>
      <Navigation />
      {/* <Info /> */}

      <Tags />
      {/* <Pagination /> */}
      <Photos />
      <Pages />
    </div>
  )
}

export default App