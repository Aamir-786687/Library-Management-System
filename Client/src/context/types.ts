export interface User {
  _id: string;
  id: string;
  username: string;
  email: string;
  // Add other user properties as needed
}

export interface AuthState {
  user: User | null;
  isFetching: boolean;
  error: boolean;
}

export type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" }; 