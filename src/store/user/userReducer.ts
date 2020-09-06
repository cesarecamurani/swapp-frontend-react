const defaultState = {
  loggedIn: false,
  user: {}
}

const userReducer = (state = defaultState, action: any) => {
  switch(action.type){
    case 'LOGIN':
      return {
        loggedIn: true,
        user: {...action.payload}
      }
    case 'LOGOUT':
      localStorage.clear()
      
      return {
        loggedIn: false,
        user: {}
    }
    default: return state
  }
}

export default userReducer
