
export function getCurrentUser () {
  return localStorage.getItem('userid')
}

export function setCurrentUser (userid) {
  window.localStorage.setItem('userid', userid)
}

export function isLoggedIn () {
  return window.localStorage.getItem('userid') !== ''
}
