import { api } from './../shared/api.urls';
import { AuthorizationService } from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpModule } from '@angular/http';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    resolve: {},
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthorizationService,
    {
      provide: 'api',
      useValue: api
    }
  ]
})
export class AuthModule { }
