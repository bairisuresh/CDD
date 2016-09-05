import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, PROTECTED_TEST,FETCH_PLOG, FETCH_RLOG } from '../actions/types';

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true, content: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case PROTECTED_TEST:
      return { ...state, content: action.payload.message };
    case FETCH_PLOG:
      return { ...state, plogdata: action.payload };
    case FETCH_RLOG:
      return { ...state, rlogdata: action.payload };

  }

  return state;
}
