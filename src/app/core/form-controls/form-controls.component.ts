import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'wf-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  constructor() { }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  ngOnInit() {
  }

}
