import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeatureKey } from './store/reducer/user.reducer';
import { UserRoutingModule } from './user-routing.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forFeature(userFeatureKey, reducer),
    UserRoutingModule,
  ],
  exports: [UserComponent],
})
export class UserModule {}
