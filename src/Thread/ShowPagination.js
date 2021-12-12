import React from 'react'
import { styles } from 'refire-app'
import { Pagination } from 'elemental'

const ShowPagination = ({
  pageSize,
  pageLimit,
  currentPage,
  handlePageSelect,
  posts,
  styles,
}) => {
  if (posts.length > pageSize) {
    return (
      <Pagination
        currentPage={currentPage}
        onPageSelect={handlePageSelect}
        pageSize={pageSize}
        total={posts.length}
        limit={pageLimit}
        className={styles.pagination}
      />
    )
  } else {
    return <div />
  }
}

const css = {
  pagination: {
    display: "inline-block",
  },
}

export default styles(css, ShowPagination)
