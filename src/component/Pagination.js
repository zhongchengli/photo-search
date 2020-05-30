import React from 'react'

export const Pagination = props => {

  const size = 3

  const { totalPages, gotoPage, currPage } = props

  if (+totalPages === 0) {
    return null;
  }

  let pages = [];

  const pageLink = (page, text, active) => <li key={text} className={active}><span className="page" onClick={() => gotoPage({ page })}>{text}</span></li>

  if (+totalPages) {
    if (+totalPages && +currPage && +currPage <= +totalPages) {
      if (currPage <= 1) {
        pages.push(<li key="last" className="disabled"><span>«</span></li>)
      } else {
        const first = pageLink(1, 'First', '')
        pages.push(first)

        const lastPage = currPage - 1;
        const last = pageLink(lastPage, '«', '')
        pages.push(last)
      }
      if (currPage <= size) {
        for (let i = 1; i <= size; i++) {
          pages.push(pageLink(i, i.toString(), currPage === i ? 'active' : ''))
        }
      } else {
        for (let i = currPage - size + 1; i <= currPage; i++) {
          pages.push(pageLink(i, i.toString(), currPage === i ? 'active' : ''))
        }
      }
      if (totalPages > size && currPage < totalPages) {
        if (currPage + 1 < totalPages) {
          pages.push(<li key="dot" className="disabled"><span>...</span></li>)
        }
        const total = pageLink(totalPages, totalPages.toString(), currPage === totalPages ? 'active' : '')
        pages.push(total);

        const nextPage = currPage + 1;
        const next = pageLink(nextPage, 'Next', '')
        pages.push(next)
      }
    }
  }

  return (
    <div className="pages">
      <ul className="pagination">
        {pages}
      </ul>
    </div>
  );
}