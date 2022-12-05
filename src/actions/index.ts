interface AuthAction {
  type: "AUTH",
  payload: { authData: null }
}

interface LogoutAction {
  type: "LOGOUT"
}

export type Action = AuthAction | LogoutAction;