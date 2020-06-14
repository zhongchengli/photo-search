import { combineReducers } from 'redux'
import { searchBar } from './searchBar'
import { photoList } from './photoList'

export const readJSON = json => {
  const obj = JSON.parse(JSON.stringify(json))
  return obj.results.map(result => JSON.parse(JSON.stringify(result)));
}

const searchPhotoApp = combineReducers({ searchBar, photoList })

export default searchPhotoApp