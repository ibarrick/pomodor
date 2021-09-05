
export const setSessions = (sessions) => ({
  type: 'SET_SESSIONS',
  sessions,
})

export const startSetSessions = () => {
  return async (dispatch, getState) => {
  let session = JSON.parse(window.localStorage.getItem('session'));
  dispatch(setSessions([session]))
  }
}

export const addSession = (session) => ({
  type: 'ADD_SESSION',
  session,
})

export const startAddSession = (session) => {
  return async (dispatch, getState) => {

	window.localStorage.setItem('session', JSON.stringify(session));

    dispatch(
      addSession({
        ...session,
      })
    )

    return session
  }
}
