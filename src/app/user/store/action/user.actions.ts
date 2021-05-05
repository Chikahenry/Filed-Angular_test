import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const postPayment = createAction('[User] Add Payment', (user: User) => ({
  user,
}));
