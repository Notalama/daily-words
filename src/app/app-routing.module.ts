import { DictionaryComponent } from './dictionary/dictionary.component';
import { AuthGuard } from './auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: DashboardComponent },
  { path: 'auth', canLoad: [AuthGuard], loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dictionary', canActivate: [AuthGuard], component: DictionaryComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(appRoutes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
