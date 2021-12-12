import React, { Component } from 'react'
import { bindings } from 'refire-app'

import Board from './Board'

class Index extends Component {
  render() {
    const { key: boardId, value: board = [] } = this.props.board || {}
    const { value: boardThreads } = this.props.boardThreads || {}
    const { value: settings = {} } = this.props.settings || {}
    const { authenticatedUser: user, theme, adminUsers } = this.props

    return (
      <Board
        adminUsers={adminUsers}
        boardId={boardId}
        board={board}
        boardThreads={boardThreads}
        settings={settings}
        user={user}
        styles={theme.Board.Board}
        theme={theme.Board}
      />
    )
  }
}

export default bindings(
  ["board", "boardThreads", "adminUsers", "settings"],
  ["authenticatedUser"]
)(Index)
