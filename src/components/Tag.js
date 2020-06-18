import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

const Tag = ({ tag, onClick }) => {

  // const [myTag, setMyTag] = useState('');
  // console.log('myTag = ', myTag);
  // console.log('setMyTag = ', setMyTag);

  return (
    <Button variant="outline-secondary" onClick={onClick}>{tag}</Button>
  )
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tag