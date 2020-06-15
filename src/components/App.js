import React from 'react'
// import Info from "./Info"
// import SearchBar from '../constainers/SearchBar'
import Photos from '../constainers/Photos'
import Tags from '../constainers/Tags'
import Navigation from './Navigation'
// import Pagination from '../constainers/Pagination'

const App = () => {
  return (
    <div>
      <Navigation />
      {/* <Info /> */}

      <Tags />
      {/* <Pagination /> */}
      <Photos />
    </div>
  )
}

export default App