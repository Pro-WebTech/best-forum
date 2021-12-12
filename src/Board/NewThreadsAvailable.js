import React from 'react'
import { styles } from 'refire-app'
import Color from 'color'

const NewThreadsAvailable = ({ threads, nextThreads = [], showNewThreads, styles }) => {
  const diff = nextThreads.length - threads.length
  const threadsWord = diff === 1 ? "thread" : "threads"
  if (!diff) {
    return <div />
  } else {
    return (
      <div className={styles.container} onClick={showNewThreads}>
        { diff } new { threadsWord } available, show up-to-date list?
      </div>
    )
  }
}

const css = {
  container: {
    padding: "10px",
    background: Color("#27ae60").lighten(0.7).hexString(),
    cursor: "pointer",
    marginBottom: "20px",
  },
}

export default styles(css, NewThreadsAvailable)
