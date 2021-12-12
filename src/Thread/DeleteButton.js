import React from 'react'
import { Button } from 'elemental'
import { styles } from 'refire-app'
import TrashIcon from 'react-icons/lib/fa/trash'

const DeleteButton = ({ visible, confirmDelete, styles }) => {
  if (visible) {
    return (
      <Button
        size="sm"
        type="danger"
        className={styles.button}
        onClick={() => confirmDelete()}>
        <span className={styles.iconContainer}>
          <TrashIcon size="16px" />
        </span> Delete
      </Button>
    )
  } else {
    return <span />
  }
}

const css = {
  button: {
    marginRight: "10px",
  },
  iconContainer: {
    verticalAlign: "top",
    display: "inline-block",
    margin: "-1px 2px 0 0",
  },
}

export default styles(css, DeleteButton)
