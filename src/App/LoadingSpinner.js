import React from 'react'
import { Spinner } from 'elemental'
import { styles } from 'refire-app'

const LoadingSpinner = ({ styles }) => (
  <div className={styles.spinnerContainer}>
    <div className={styles.verticalAlign}>
      <Spinner size="lg" />
    </div>
  </div>
)

const css = {
  spinnerContainer: {
    width: "100%",
    height: "100%",
    display: "table",
  },
  verticalAlign: {
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
  },
}

export default styles(css, LoadingSpinner)
