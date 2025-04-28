export interface User {
    id: string;
    name: string;
    // add other fields that match your `user` object
  }
  
  export interface AuthState {
    user: User | null;
    isFetching: boolean;
    error: boolean;
  }
  
  export type Action =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS"; payload: User }
    | { type: "LOGIN_FAILURE" }
    | { type: "LOGOUT" };
  