import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dictionary-item',
  templateUrl: './dictionary-item.component.html'
})
export class DictionaryItemComponent implements OnInit {

  @Input() parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
