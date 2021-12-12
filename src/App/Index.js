import React, { Component } from 'react'
import { bindings } from 'refire-app'
import themes from '../themes'
import { siteName } from '../config'

import App from './App'

class Index extends Component {

  constructor() {
    super()
    this.state = {
      stylesLoaded: true,
    }
    this.themeChanged = this.themeChanged.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { value: user } = this.props.user || {}
    const { value: nextUser } = nextProps.user || {}
    if (!user && nextUser) {
      this.themeChanged()
    }
    if (user && nextUser && user.settings && nextUser.settings && user.settings.theme !== nextUser.settings.theme) {
      this.themeChanged()
    }
  }

  themeChanged() {
    // delay rendering after theme change to avoid react-free-style errors
    this.setState({ stylesLoaded: false })
    setTimeout(() => {
      this.setState({ stylesLoaded: true })
    }, 0)
  }

  render() {
    const { _status: { connected, initialFetchDone }, authenticatedUser, children } = this.props
    const { key: boardKey, value: board = {} } = this.props.board || {}
    const { key: threadKey } = this.props.thread || {}
    const { value: settings } = this.props.settings || {}
    const { value: user } = this.props.user || {}
    const { settings: { theme = "light" } = {} } = user || {}
    const loading = !connected || !initialFetchDone || !settings || !this.state.stylesLoaded
    const currentTheme = themes[theme]

    return (
      <App
        siteName={siteName}
        loading={loading}
        user={user}
        board={board}
        boardKey={boardKey}
        threadKey={threadKey}
        authenticatedUser={authenticatedUser}
        theme={currentTheme.App}
        styles={currentTheme.App.App}
      >
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { theme: currentTheme })
          })
        }
      </App>
    )
  }
}

export default bindings(
  ["_status", "board", "thread", "settings", "user"],
  ["authenticatedUser"]
)(Index)
