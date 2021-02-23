import { DadosProps } from 'src/@types/UserTypes';

export const initialState = {
  logged: false,
};

type ACTIONTYPE =
  | { type: 'LOGIN'; payload: DadosProps }
  | { type: 'LOGOUT'; payload: Record<string, unknown> }
  | { type: 'HASH'; payload: Record<string, unknown> };

function auth(state = initialState, action: ACTIONTYPE): Record<string, unknown> {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default auth;
