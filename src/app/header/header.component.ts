import { Router } from '@angular/router';
import { AuthorizationService } from './../auth/auth.service';
import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [AuthorizationService]
})
export class HeaderComponent implements OnInit  {

  isLoggedIn: boolean;

  constructor(
    private ls: LocalStorageService,
    private authService: AuthorizationService,
    private router: Router) {}

  ngOnInit() {
    this.ls.status.subscribe(res => {
      this.isLoggedIn = res;
      console.log(res);
    });
    this.ls.setup();
  }

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['app']);
  }

}
