import refireApp, { firebase } from 'refire-app'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { momentLocaleSetup } from './utils'
import 'native-promise-only'
injectTapEventPlugin()
momentLocaleSetup()

// import elemental css
import '../node_modules/elemental/less/elemental.less'
// highlight.js
import '../node_modules/highlight.js/styles/default.css'

import { userReducer } from './reducers'

import { apiKey, projectId } from './config'
import bindings from './bindings'
import routes from './routes'

refireApp({
  apiKey,
  projectId,
  bindings,
  routes,
  reducers: {
    authenticatedUser: userReducer,
  },
  pathParams: (state) => state.routing.params,
  onAuth: (authData, ref) => {
    // update users/:uid with latest user data after successful authentication
    if (authData && authData.uid) {
      const { uid, providerId, displayName, photoURL, email } = authData
      ref.child(`users/${uid}`).update({
        provider: providerId,
        displayName,
        profileImageURL: photoURL,
        lastLoginAt: firebase.database.ServerValue.TIMESTAMP,
        email: email,
      })
      // set registeredAt to current timestamp if this is the first login
      ref.child(`users/${uid}/registeredAt`).transaction((registeredAt) => {
        if (!registeredAt) {
          return firebase.database.ServerValue.TIMESTAMP
        }
      })
    }
  },
})
