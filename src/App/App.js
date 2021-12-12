import React, { Component } from 'react'
import { styles } from 'refire-app'
import Footer from './Footer'
import TopBar from './TopBar'
import LoadingSpinner from './LoadingSpinner'
import UserSettings from './UserSettings'
import globalStyles from '../globalStyles'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      settingsVisible: false,
    }
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  toggleSettings() {
    this.setState({ settingsVisible: !this.state.settingsVisible })
  }

  render() {
    const {
      siteName,
      children,
      loading,
      user,
      board,
      boardKey,
      threadKey,
      authenticatedUser,
      styles,
      theme,
    } = this.props
    const { settingsVisible } = this.state

    if (loading) {
      return <LoadingSpinner />
    }

    return (
      <div className={styles.app}>
        <UserSettings
          visible={settingsVisible}
          toggleVisible={this.toggleSettings}
          authenticatedUser={authenticatedUser}
          user={user}
          styles={theme.UserSettings}
        />
        <div>
          <TopBar
            siteName = {siteName || "Jon Forum"}
            authenticatedUser={authenticatedUser}
            user={user}
            board={board}
            boardKey={boardKey}
            threadKey={threadKey}
            toggleSettings={this.toggleSettings}
            styles={theme.TopBar}
            theme={theme} />
          <div className={styles.body}>
            {children}
          </div>
          <Footer styles={theme.Footer} />
        </div>
      </div>
    )
  }
}

const css = {
  // register global styles
  ":global": globalStyles,
  app: {
    maxWidth: "980px",
    margin: "0 auto",
    padding: "0 20px",
  },
  body: {
    paddingTop: "60px",
  },
}

export default styles(
  css,
  App
)
