import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  step = 5;
  @Input() ComplitedNumber: any 
  @Input() list: any 
  constructor() { }

  ngOnInit(){
    console.log(this.list)
  }

  moveTo(Number:number){
   return this.step = Number
  }


}
