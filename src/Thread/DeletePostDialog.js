import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const DeletePostDialog = ({ visible, save, hide, styles }) => {
  return (
    <SettingsModal
      title="Delete post?"
      visible={visible}
      hide={hide}
      save={save}
      saveText="Delete"
      width="small"
      styles={styles}
    >
      Do you really want to delete this post?
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
}

export default styles(css, DeletePostDialog)
