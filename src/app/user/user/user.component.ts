import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { PaymentService } from '../service/payment.service';
import { NotificationService } from '../service/toastr.service';
import { UserState } from '../store/reducer/user.reducer';
import { selectUsers } from '../store/selector/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean;
  users$: Observable<User[]>;

  constructor(
    private toastr: NotificationService,
    private paymentService: PaymentService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient, // private modalService: NgbModal,
    private store: Store<UserState>
  ) {
    this.users$ = this.store.pipe(select(selectUsers));
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9\s]*$/),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      monthlyBudget: [
        '',
        [Validators.pattern(/^[0-9]*$/), Validators.required],
      ],
    });
    // console.log('kasjhdfbghjdksdsj');
  }

  postPayment(newPayment) {
    this.submitted = true;
    if (this.userForm.invalid) {
      this.toastr.showError('Error', 'Invalid inputs', 4000);
      return;
    } else {
      this.paymentService.makePayment(newPayment);

      this.userForm.reset();

      this.toastr.showSuccess(
        'Successful',
        'Payment was made successfully',
        4000
      );
    }
    this.submitted = false;
  }

  omit_special_char(event) {
    var k;
    k = event.charCode; //         k = event.keyCode;  (Both can be used)
    return (
      (k > 64 && k < 91) ||
      (k > 96 && k < 123) ||
      k == 8 ||
      k == 32 ||
      (k >= 48 && k <= 57)
    );
  }
}
