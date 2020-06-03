import { combineReducers } from 'redux'
import { searchBar } from './searchBar'
import { photoList } from './photoList'



const searchPhotoApp = combineReducers({ searchBar, photoList })

export default searchPhotoApp