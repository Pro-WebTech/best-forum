import { USER_AUTHENTICATED, USER_UNAUTHENTICATED } from 'refire-app'

export const userReducer = (state = null, action) => {
  const { payload } = action
  if (action.type === USER_AUTHENTICATED) {
    const { uid, providerId, displayName, photoURL, email } = payload
    return {
      uid,
      provider: providerId,
      displayName,
      profileImageURL: photoURL,
      email,
    }
  } else if (action.type === USER_UNAUTHENTICATED) {
    return null
  } else {
    return state
  }
}
