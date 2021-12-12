import React from 'react'
import { Pagination } from 'elemental'
import { styles } from 'refire-app'

const ShowPagination = ({ pageSize, currentPage, handlePageSelect, threads, styles }) => {
  if (threads.length > pageSize) {
    return (
      <Pagination
        currentPage={currentPage}
        onPageSelect={handlePageSelect}
        pageSize={pageSize}
        total={threads.length}
        className={styles.pagination}
      />
    )
  } else {
    return <div />
  }
}

const css = {
  pagination: {
    display: "block",
    margin: "10px 0 0 0",
  },
}

export default styles(css, ShowPagination)
