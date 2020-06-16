import React from 'react';
import { Button } from 'react-bootstrap';

const Tag = ({ tag, onClick }) => {

  // const [myTag, setMyTag] = useState('');
  // console.log('myTag = ', myTag);
  // console.log('setMyTag = ', setMyTag);

  return (
    <Button variant="outline-secondary" onClick={onClick}>{tag}</Button>
  )
}

export default Tag