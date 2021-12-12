import React from 'react'
import { IndexRoute, Route } from 'refire-app'

import App from './App/Index'
import Index from './Categories/Index'
import Board from './Board/Index'
import Thread from './Thread/Index'
import Profile from './Profile/Index'
import NativeLogin from './NativeLogin/NativeLogin'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="board/:boardId" component={Board} />
      <Route path="board/:boardId/:threadId" component={Thread} />
      <Route path="profile/:uid" component={Profile} />
    </Route>
    <Route path="native-login" component={NativeLogin} />
  </Route>
)
