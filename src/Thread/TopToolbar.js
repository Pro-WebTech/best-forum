import React from 'react'
import { styles } from 'refire-app'

const TopToolbar = ({ children, isAdmin, posts, pageSize, styles }) => {
  if (posts.length > pageSize || isAdmin) {
    return (
      <div className={styles.container}>
        {children}
      </div>
    )
  } else {
    return <span />
  }
}

const css = {
  container: {
    margin: "0 0 20px 0",
    "@media (min-width: 760px)": {
      margin: "0",
      position: "absolute",
      right: "0px",
      top: "0px",
    },
  },
}

export default styles(css, TopToolbar)
