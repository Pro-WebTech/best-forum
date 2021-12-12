import React from 'react'
import { styles } from 'refire-app'
import { Button } from 'elemental'

const SettingsButton = ({ user, toggleVisible, styles }) => {
  if (user) {
    return (
      <Button className={styles.button} onClick={() => toggleVisible()}>
        Settings
      </Button>
    )
  } else {
    return (
      <span />
    )
  }
}

const css = {
  button: {
    marginRight: "10px",
  },
}

export default styles(css, SettingsButton)
