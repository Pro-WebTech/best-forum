import React from 'react'
import { Button } from 'elemental'
import { styles } from 'refire-app'

const NewThreadButton = ({ user, newThread, styles }) => {
  if (user) {
    return (
      <Button className={styles.button} onClick={() => newThread()}>
        New thread
      </Button>
    )
  } else {
    return <span />
  }
}

const css = {
  button: {
    width: "100%",
    "@media (min-width: 480px)": {
      width: "auto",
    },
  },
}

export default styles(css, NewThreadButton)
