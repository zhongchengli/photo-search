import { combineReducers } from 'redux'
import { searchRecuder } from './search-reducer'
import { photoReducer } from './photo-reducer'

// export const readJSON = json => {
//   console.log('json = ', json);
//   const obj = JSON.parse(JSON.stringify(json))
//   const results = obj.results.map(result => JSON.parse(JSON.stringify(result)));
//   console.log('obj = ', obj);
//   return { totalPages: obj.total_pags, results };
// }

export const searchPhotoApp = combineReducers({ searchRecuder, photoReducer })

// export default searchPhotoApp