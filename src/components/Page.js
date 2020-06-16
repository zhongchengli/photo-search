import React from 'react';
import { Pagination } from 'react-bootstrap';
// import { useSelector } from 'react-redux';

const Page = ({ tag, totalPages, currPage, onClick }) => {

  // const myState = useSelector(state => state);

  // console.log('myState = ', myState);

  // console.log('onClick = ', onClick);

  return (
    <div className="container">
      <div className="pages">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{totalPages}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination >
      </div>
    </div>
  )
}

export default Page