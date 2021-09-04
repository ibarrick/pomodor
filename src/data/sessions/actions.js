
export const setSessions = (sessions) => ({
  type: 'SET_SESSIONS',
  sessions,
})

export const startSetSessions = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

  dispatch(setSessions([]))
  }
}

export const addSession = (session) => ({
  type: 'ADD_SESSION',
  session,
})

export const startAddSession = (session) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    const { duration, label = null, createdAt } = session


    dispatch(
      addSession({
        ...session,
      })
    )

    return session
  }
}
