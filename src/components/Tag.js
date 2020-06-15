import React from 'react';
import { Button } from 'react-bootstrap';

const Tag = ({ tag, onClick }) => {

  return (
    <Button variant="outline-secondary" onClick={onClick}>{tag}</Button>
  )
}

export default Tag