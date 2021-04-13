import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

const Pagination = (props) => {
  const { pageSize, itemsCount, onPageChange, currentPage } = props
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)
  if (pages <= 1) return null
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={currentPage === page ? 'page-item active' : 'page-item'}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination
