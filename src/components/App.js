import React from 'react'
import Info from "./Info"
import SearchBar from '../constainers/SearchBar'
import Album from '../constainers/Album'
import TabBar from '../constainers/TabBar'
import Pagination from '../constainers/Pagination'

const App = () => {
  return (
    <div>
      <Info />
      <SearchBar />
      <TabBar />
      <Pagination />
      <Album />
    </div>
  )
}

export default App