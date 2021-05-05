import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UserState } from './user/store/reducer/user.reducer';
import { selectUsers } from './user/store/selector/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-test';
  payments$: Observable<User[]>;

  show: boolean;

  constructor(private router: Router, private store: Store<UserState>) {
    this.payments$ = this.store.pipe(select(selectUsers));
    console.log(this.payments$.toPromise.length);

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // tslint:disable-next-line: triple-equals
        if (event.url == '' || event.url == '/') {
          this.show = false;
        } else {
          // console.log("NU")
          this.show = true;
        }
      }
    });
  }
}
