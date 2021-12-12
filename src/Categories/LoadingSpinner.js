import React from 'react'
import { Card, Spinner } from 'elemental'
import { styles } from 'refire-app'

const LoadingSpinner = ({ styles }) => {
  return (
    <Card>
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    </Card>
  )
}

const css = {
  spinnerContainer: {
    padding: "30px 0",
  },
}

export default styles(css, LoadingSpinner)
