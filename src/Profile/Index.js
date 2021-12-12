import React, { Component } from 'react'
import { bindings } from 'refire-app'

import Profile from './Profile'

class Index extends Component {
  render() {
    const { value: profile = {} } = this.props.profile || {}
    const { value: startedThreads = [] } = this.props.profileThreadsStarted || {}
    const { value: settings = {} } = this.props.settings || {}
    const { theme } = this.props
    return (
      <Profile
        profile={profile}
        startedThreads={startedThreads}
        settings={settings}
        styles={theme.Profile.Profile}
        theme={theme.Profile}
      />
    )
  }
}

export default bindings(
  ["profile", "profileThreadsStarted", "settings"]
)(Index)
