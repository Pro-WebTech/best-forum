import React, { Component } from 'react'
import { FirebaseWrite, styles } from 'refire-app'
import { FormField, Radio } from 'elemental'

import SettingsModal from '../Admin/SettingsModal'
import { saveSetting } from '../updates'

class UserSettings extends Component {

  constructor(props) {
    super(props)
    this.saveSettings = this.saveSettings.bind(this)
  }

  saveSettings(setting, value) {
    const { authenticatedUser, submit } = this.props
    submit(
      saveSetting(
        {
          userId: authenticatedUser.uid,
          setting,
          value,
        }
      )
    )
  }

  render() {
    const { visible, toggleVisible, user = {}, styles } = this.props
    const { settings = {} } = user
    if (!user) {
      return <div />
    }
    return (
      <SettingsModal
        title="Settings"
        visible={visible}
        hide={toggleVisible}
        save={toggleVisible}
        saveText="Apply"
        Footer={() => <div/>}
        styles={styles}
      >
        <div>
          <FormField label="Theme">
            <Radio
              name="inline_radios"
              label="Light (default)"
              checked={settings.theme === "light"}
              onChange={() => this.saveSettings("theme", "light")}
            />
            <Radio
              name="inline_radios"
              label="Dark"
              checked={settings.theme === "dark"}
              onChange={() => this.saveSettings("theme", "dark")}
            />
          </FormField>
        </div>
      </SettingsModal>
    )
  }
}

const css = {
  container: {},
  modal: {},
}

export default FirebaseWrite({ method: "update" })(
  styles(css, UserSettings)
)
