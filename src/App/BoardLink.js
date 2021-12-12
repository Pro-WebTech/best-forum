import React from 'react'
import { Link } from 'refire-app'

const BoardLink = ({ board, boardKey, threadKey, style }) => {
  if (board && boardKey && threadKey) {
    return (
      <span>
        <strong className={style}> &gt; </strong>
        <Link to={`/board/${boardKey}`} className={style}>{board.title}</Link>
      </span>
    )
  } else {
    return <span />
  }
}

export default BoardLink
