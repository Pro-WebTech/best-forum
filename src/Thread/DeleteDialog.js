import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const DeleteDialog = ({ visible, save, hide, title="", styles }) => {
  return (
    <SettingsModal
      title="Delete thread?"
      visible={visible}
      hide={hide}
      save={save}
      saveText="Delete"
      width="small"
      styles={styles}
    >
      Do you really want to delete thread <strong>{title}</strong>?
    </SettingsModal>
  )
}


const css = {
  container: {},
  modal: {},
}

export default styles(css, DeleteDialog)
