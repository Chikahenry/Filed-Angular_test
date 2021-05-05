import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { postPayment } from '../store/action/user.actions';
import { UserState } from '../store/reducer/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private store: Store<UserState>) {}

  makePayment(newPayment) {
    const payment = new User();
    payment.Email = newPayment.email;
    payment.PhoneNumber = newPayment.phoneNumber;
    payment.LastName = newPayment.lastname;
    payment.FirstName = newPayment.firstname;
    payment.MonthlyBudget = newPayment.monthlyBudget;

    this.store.dispatch(postPayment(payment));
  }
}
