/*import { Component } from '@angular/core';

@Component({
  selector: 'app-create-onotopia',
  templateUrl: './create-onotopia.component.html',
  styleUrls: ['./create-onotopia.component.css']
})
export class CreateOnotopiaComponent {

} */

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-onotopia',
  templateUrl: './create-onotopia.component.html',
  styleUrls: ['./create-onotopia.component.css']
})
export class CreateOnotopiaComponent implements OnInit {
  newOnomatopia: string = '';

  @Output() sendOnomatopiaToParent: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit(): void {}

  createOnomatopia() {
    if (this.newOnomatopia.trim() !== '') {
      this.sendOnomatopiaToParent.emit(this.newOnomatopia);
      this.newOnomatopia = '';
    }
  }
}
