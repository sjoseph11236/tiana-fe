import React, { useState } from 'react';

const generatePagesNumbers = (startIdx, endIdx, maxPages) => {
  let pages = []

  for (let i = startIdx; i < endIdx && i <= maxPages; i++) {
    pages.push(i);
  }

  return pages;
}

const PageNumbers = ({ updatePage, page, maxPages, startIdx, endIdx }) => {

  let pages = generatePagesNumbers(startIdx, endIdx, maxPages);

  return (
    <ul className="page-numbers">
      {page > 1 ? <li>
        <span className="page-numbers" onClick={() => updatePage(page -= 1)}>
          <i className="faicons fa fa-chevron-left" ></i>
          Newer Posts
        </span>
      </li> : null}
      {
        pages.map(number => {
          return <li>
            <span className={`page-numbers ${page === number ? "current" : null}`} onClick={() => updatePage(number)}>
              {number}
            </span>
          </li>
        })
      }
      {page !== maxPages ? <li>
        <span className="page-numbers" onClick={() => updatePage(page += 1)}>
          Older Posts
          <i className="faicons fa fa-chevron-right" ></i>
        </span>
      </li> : null}
    </ul>
  )
}

export default PageNumbers;
