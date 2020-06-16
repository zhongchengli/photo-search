import React, { useRef, useEffect } from 'react';
import Photo from '../components/Photo';
// @ts-ignore
import { fetchGetsIfNeeded } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const Photos = () => {

  // @ts-ignore
  const dispatch = useDispatch();

  const {
    photos,
    query
    // isFetching,
    // didInvalidate
  } = useSelector(state => {
    // @ts-ignore
    const { searchRecuder, photoReducer } = state
    const { isFetching, didInvalidate, photos } = photoReducer
    const { tag, currPage } = searchRecuder


    return { photos, query: { tag, currPage }, isFetching, didInvalidate };
  })

  const prevTag = usePrevious(query.tag);

  useEffect(() => {
    if (prevTag !== query.tag) {
      dispatch(fetchGetsIfNeeded(query.tag, query.currPage));
    }
  })

  return (
    <div className="container">
      <div className="album">
        {photos.map(photo => (
          <Photo key={photo.id} {...photo} />
        ))}
      </div>
    </div>
  )
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => { ref.current = value; }, [value]);
  return ref.current;
}

export default Photos;
