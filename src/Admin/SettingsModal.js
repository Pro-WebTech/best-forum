import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'elemental'

const DefaultFooter = ({ save, saveText, hide, cancelText, styles }) => (
  <ModalFooter className={styles.modal}>
    <Button type="primary" onClick={save}>
      {saveText}
    </Button>
    <Button type="link-cancel" onClick={hide}>
      {cancelText}
    </Button>
  </ModalFooter>
)

const SettingsModal = ({
  cancelText = "Cancel",
  children,
  save,
  saveText = "Save",
  title,
  hide,
  visible,
  width="medium",
  Footer=DefaultFooter,
  styles = {},
}) => {
  return (
    <Modal
      isOpen={visible}
      onCancel={hide}
      width={width}
      backdropClosesModal
      className={styles.container}
    >
    	<ModalHeader
        text={title}
        showCloseButton
        onClose={hide}
        className={styles.modal}
      />
    	<ModalBody className={styles.modal}>
        {children}
      </ModalBody>
      <Footer
        save={save}
        saveText={saveText}
        hide={hide}
        cancelText={cancelText}
        styles={styles}
      />
    </Modal>
  )
}

export default SettingsModal
