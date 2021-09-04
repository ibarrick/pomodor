
export const setSessions = (sessions) => ({
  type: 'SET_SESSIONS',
  sessions,
})

export const startSetSessions = () => {
  return async (dispatch, getState) => {

  dispatch(setSessions([]))
  }
}

export const addSession = (session) => ({
  type: 'ADD_SESSION',
  session,
})

export const startAddSession = (session) => {
  return async (dispatch, getState) => {


    dispatch(
      addSession({
        ...session,
      })
    )

    return session
  }
}
