import React from 'react'
import { styles } from 'refire-app'
import QuoteIcon from 'react-icons/lib/fa/quote-left'

const QuoteButton = ({ user, locked, onClick, styles }) => {
  if (user && !locked) {
    return (
      <span onClick={onClick} title="Quote">
        <span className={styles.button}>
          <QuoteIcon size="16px" />
        </span>
      </span>
    )
  } else {
    return <span />
  }
}

const css = {
  button: {
    cursor: "pointer",
    display: "inline-block",
    verticalAlign: "top",
    paddingRight: "20px",
    color: "#555",
  },
}

export default styles(css, QuoteButton)
