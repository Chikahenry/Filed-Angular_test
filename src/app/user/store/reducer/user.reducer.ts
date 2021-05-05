import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../action/user.actions';
import { User } from 'src/app/models/user';

export const userFeatureKey = 'user';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.postPayment, (state: UserState, { user }) => ({
    ...state,
    users: [...state.users, user],
  }))
);

export function reducer(state: UserState | undefined, action: Action): any {
  return userReducer(state, action);
}
