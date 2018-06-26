import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(
    @Inject('api') private api: {String}
  ) { }

  ngOnInit() {
    console.log(this.api);
  }

}
