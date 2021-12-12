import React from 'react'
import { Link, styles } from 'refire-app'
import LockIcon from 'react-icons/lib/fa/lock'
import CommentsIcon from 'react-icons/lib/fa/comments'
import { fromNow } from '../utils'

const Thread = ({ threadKey, thread, boardId, styles }) => {
  if (!thread) return <div />
  const locked = thread.locked
    ? <LockIcon />
    : <span />

  return (
    <div className={styles.threadContainer} key={threadKey}>
      <Link to={`/board/${boardId}/${threadKey}`} className={styles.title}>
        {thread.title}
      </Link>
      <div className={styles.metaContainer}>
        <div className={styles.lockedContainer}>
          {locked}
        </div>
        <div className={styles.profileContainer}>
          <Link to={`/profile/${thread.user.id}`} title={thread.user.displayName}>
            <img src={thread.user.image} className={styles.image} />
          </Link>
        </div>
        <Link to={`/board/${boardId}/${threadKey}`} className={styles.commentsContainer}>
          <span className={styles.commentsCount}>
            {Object.keys(thread.posts).length - 1}
          </span>
          <CommentsIcon />
        </Link>
        <div className={styles.lastPost}>
          {fromNow(thread.lastPostAt)}
        </div>
      </div>
    </div>
  )
}

const css = {
  threadContainer: {
    position: "relative",
    padding: "15px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    "&:last-child": {
      borderBottom: 0,
    },
  },
  title: {
    margin: "0",
    paddingRight: "100px",
    fontWeight: 500,
    display: "block",
  },
  image: {
    display: "none",
    "@media (min-width: 480px)": {
      display: "inline-block",
      width: "20px",
      height: "20px",
      borderRadius: "10px",
    },
  },
  lockedContainer: {
    display: "inline-block",
    verticalAlign: "middle",
    margin: "0 5px 0 0",
  },
  profileContainer: {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
  },
  metaContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: "13px 0",
  },
  commentsContainer: {
    display: "inline-block",
    minWidth: "40px",
    textAlign: "right",
    verticalAlign: "middle",
  },
  commentsCount: {
    display: "inline-block",
    margin: "0 5px 0 0",
  },
  lastPost: {
    display: "inline-block",
    minWidth: "70px",
    textAlign: "center",
    verticalAlign: "middle",
  },
}

export default styles(css, Thread)
