import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const LockDialog = ({ visible, save, hide, locked, title="", styles }) => {
  const text = locked ? "Unlock" : "Lock"
  const confirmText = locked ? "unlock" : "lock"
  return (
    <SettingsModal
      title={`${text} thread?`}
      visible={visible}
      hide={hide}
      save={save}
      saveText={text}
      width="small"
      styles={styles}
    >
      Do you really want to {confirmText} thread <strong>{title}</strong>?
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
}

export default styles(css, LockDialog)
