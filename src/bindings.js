export default {
  "categories": {
    type: "Array",
    query: (ref) => ref.orderByChild("active").equalTo(true),
    path: "categories",
  },
  "boards": {
    type: "Array",
    query: (ref) => ref.orderByChild("active").equalTo(true),
    path: "boards",
  },
  "board": {
    type: "Object",
    path: (state, params) => (
      params.boardId
        ? `boards/${params.boardId}`
        : null
    ),
  },
  "boardThreads": {
    populate: (key) => `threads/${key}`,
    path: (state, params) => (
      params.boardId
        ? `boards/${params.boardId}/threads`
        : null
    ),
  },
  "thread": {
    type: "Object",
    path: (state, params) => (
      params.threadId
        ? `threads/${params.threadId}`
        : null
    ),
  },
  "threadPosts": {
    populate: (key) => `posts/${key}`,
    path: (state, params) => (
      params.threadId
        ? `threads/${params.threadId}/posts`
        : null
    ),
  },
  "user": {
    type: "Object",
    path: (state) => (
      state.firebase.authenticatedUser
        ? `users/${state.firebase.authenticatedUser.uid}`
        : null
    ),
  },
  "profile": {
    type: "Object",
    path: (state, params) => (
      params.uid
        ? `users/${params.uid}`
        : null
    ),
  },
  "profileThreadsStarted": {
    populate: (key) => `threads/${key}`,
    query: (ref) => ref.orderByKey().limitToLast(10),
    path: (state, params) => (
      params.uid
        ? `users/${params.uid}/threadsStarted`
        : null
    ),
  },
  "adminUsers": {
    type: "Array",
    path: (state) => (
      state.firebase.authenticatedUser
        ? "adminUsers"
        : null
    ),
  },
  "settings": {
    path: "settings",
  },
}
