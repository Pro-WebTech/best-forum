import React, { Component } from 'react'
import { styles } from 'refire-app'
import { Card } from 'elemental'
import moment from 'moment'

import ThreadsStarted from './ThreadsStarted'

class Profile extends Component {

  render() {
    const { profile, startedThreads, settings, styles, theme } = this.props
    const { DATE_FORMAT } = settings

    return (
      <div>
        <Card className={styles.container}>
          <img
            className={styles.profileImage}
            src={profile.profileImageURL}
          />
          <div className={styles.profileContainer}>
            <h2 className={styles.header}>
              {profile.displayName}
            </h2>
            <div>
              <strong>Member since</strong> {moment(profile.registeredAt || moment(), "x").format(DATE_FORMAT)}
            </div>
            <div>
              <strong>Threads started</strong> {Object.keys(profile.threadsStarted || {}).length}
            </div>
            <div>
              <strong>Posts</strong> {Object.keys(profile.posts || {}).length}
            </div>
          </div>
        </Card>
        <Card className={styles.container}>
          <h3 className={styles.header}>Latest threads started</h3>
          <ThreadsStarted
            threads={startedThreads}
            styles={theme.ThreadsStarted}
          />
        </Card>
      </div>
    )
  }

}

const css = {
  container: {},
  header: {},
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "40px",
    display: "inline-block",
    verticalAlign: "top",
    marginRight: "20px",
  },
  profileContainer: {
    display: "inline-block",
  },
}

export default styles(css, Profile)
