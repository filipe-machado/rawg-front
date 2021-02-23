import { RawResponse } from 'src/@types';

export const initialState = {
  results: [],
};

type ACTIONTYPE =
  | { type: 'HIDRATE'; payload: RawResponse };

function auth(state = initialState, action: ACTIONTYPE): Record<string, unknown> {
  switch (action.type) {
    case 'HIDRATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default auth;
