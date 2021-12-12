import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const Settings = ({ visible, toggleVisible, styles }) => {
  return (
    <SettingsModal
      title="Board settings"
      visible={visible}
      hide={toggleVisible}
      save={toggleVisible}
      styles={styles}
    >
      Not implemented yet.
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
}

export default styles(css, Settings)
