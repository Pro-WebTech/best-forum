import React from 'react'
import { styles } from 'refire-app'
import { Button } from 'elemental'
import PencilIcon from 'react-icons/lib/fa/pencil'
import EyeIcon from 'react-icons/lib/fa/eye'

const PreviewButton = ({ enabled, togglePreview, styles }) => {
  if (enabled) {
    return (
      <Button type="link" onClick={togglePreview}>
        <span className={styles.iconContainer}>
          <PencilIcon size="16px" />
        </span> Back to edit
      </Button>
    )
  } else {
    return (
      <Button type="link" onClick={togglePreview}>
        <span className={styles.iconContainer}>
          <EyeIcon size="16px" />
        </span> Preview
      </Button>
    )
  }
}

const css = {
  iconContainer: {
    verticalAlign: "top",
    display: "inline-block",
    margin: "-1px 1px 0 0",
  },
}

export default styles(css, PreviewButton)
