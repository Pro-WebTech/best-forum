import React from 'react'
import { styles } from 'refire-app'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up'

const UpvoteButton = ({ user, upvotes, liked, onClick, styles }) => {
  if (user) {
    const thumbsUpClass = liked ? styles.buttonActive : styles.button
    return (
      <span onClick={onClick} title="Upvote">
        <span className={thumbsUpClass}>
          <ThumbsUpIcon size="16px" /> {upvotes}
        </span>
      </span>
    )
  } else {
    return (
      <span className={styles.inactiveButton}>
        <ThumbsUpIcon size="16px" /> {upvotes}
      </span>
    )
  }
}

const button = {
  cursor: "pointer",
  color: "#555",
  display: "inline-block",
  verticalAlign: "top",
  paddingRight: "20px",
}

const css = {
  button,
  buttonActive: {
    ...button,
    color: "#1385e5",
  },
  inactiveButton: {
    ...button,
    cursor: "default",
  },
}

export default styles(css, UpvoteButton)
