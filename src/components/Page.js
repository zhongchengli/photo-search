import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = ({ tag, totalPages, currPage, onClick }) => {

  const firstPageItem = currPage === 1 ? <Pagination.First disabled key='0' /> : <Pagination.First onclick={onClick(tag, 1)} />
  const prevPageItem = currPage === 1 ? <Pagination.Prev disabled key='1' /> : <Pagination.Prev onclick={onClick(tag, currPage - 1)} />
  const nextPageItem = currPage === totalPages ? <Pagination.Next disabled key='2' /> : <Pagination.Next onclick={onClick(tag, currPage + 1)} />
  const lastPageItem = currPage === totalPages ? <Pagination.Last disabled key='3' /> : <Pagination.Last onclick={onClick(tag, totalPages)} />

  const offsets = [-1, 0, 1];
  const pageItems = offsets.map(offset => {
    if (offset === 0) {
      return <Pagination.Item key={offset + 5} active onclick={onClick(tag, currPage)}>{currPage}</Pagination.Item>
    } else {
      return <Pagination.Item key={offset + 5} onclick={onClick(tag, currPage + offset)}>{currPage + offset}</Pagination.Item>
    }

  })

  if (currPage > 3) {
    pageItems.unshift(<Pagination.Ellipsis />)
  }
  if (currPage < totalPages - 2) {
    pageItems.push(<Pagination.Ellipsis />)
  }

  pageItems.unshift(prevPageItem);
  pageItems.unshift(firstPageItem);
  pageItems.push(nextPageItem);
  pageItems.push(lastPageItem);

  return (
    <div className="container">
      <div className="pages">
        <Pagination onClick={onClick(tag,)}>
          {/* <Pagination.First />
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
          <Pagination.Last /> */}
          {pageItems.map(item => item)}
        </Pagination >
      </div>
    </div>
  )
}

export default Page