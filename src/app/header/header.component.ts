import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [LocalStorageService]
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private ls: LocalStorageService) { }

  ngOnInit() {
    this.isLoggedIn = this.ls.isLoggedIn();
  }

}
