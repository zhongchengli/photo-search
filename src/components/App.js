import React from 'react'
// import Info from "./Info"
import SearchBar from '../constainers/SearchBar'
import Photos from '../constainers/Photos'
import Tags from '../constainers/Tags'
// import Pagination from '../constainers/Pagination'

const App = () => {
  return (
    <div>
      {/* <Info /> */}
      <SearchBar />
      <Tags />
      {/* <Pagination /> */}
      <Photos />
    </div>
  )
}

export default App