import React from 'react'
import { Button } from 'elemental'
import { styles } from 'refire-app'
import LockIcon from 'react-icons/lib/fa/lock'
import UnlockIcon from 'react-icons/lib/fa/unlock'

const LockButton = ({ visible, locked, confirmLockedChange, styles }) => {
  if (!visible) {
    return <span />
  }
  if (locked) {
    return (
      <Button
        size="sm"
        type="success"
        className={styles.button}
        onClick={() => confirmLockedChange()}
      >
        <span className={styles.iconContainer}>
          <UnlockIcon size="16px" />
        </span> Unlock
      </Button>
    )
  } else {
    return (
      <Button
        size="sm"
        type="warning"
        className={styles.button}
        onClick={() => confirmLockedChange()}
      >
        <span className={styles.iconContainer}>
          <LockIcon size="16px" />
        </span> Lock
      </Button>
    )
  }
}

const css = {
  iconContainer: {
    verticalAlign: "top",
    display: "inline-block",
    margin: "-1px 2px 0 0",
  },
}

export default styles(css, LockButton)
