import React from 'react'
import { Link, styles } from 'refire-app'

const ThreadsStarted = ({ threads, styles }) => {
  if (threads.length) {
    return (
      <div>
        {
          threads
          .concat([])
          .reverse()
          .sort((a, b) => a.key < b.key)
          .map(({ key, value: thread }) => {
            return (
              <Link
                to={`/board/${thread.boardId}/${key}`}
                key={key}
                className={styles.threadLink}
              >
                {thread.title}
              </Link>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div>
        No threads started yet.
      </div>
    )
  }
}

const css = {
  threadLink: {
    display: "block",
  },
}

export default styles(css, ThreadsStarted)
