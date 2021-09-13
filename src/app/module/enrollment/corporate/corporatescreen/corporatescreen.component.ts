import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporatescreen',
  templateUrl: './corporatescreen.component.html',
  styleUrls: ['./corporatescreen.component.scss']
})
export class CorporatescreenComponent implements OnInit {

  currentStep:number = 1
  list: any = [
    {
      icon:'fa fa-user',
      title:'Corporate Data',
      state: 1
    },
    {
      icon:'fa fa-users',
      title:'Dependant Data',
      state: 2
    }, 
    {
      icon:'fa fa-database',
      title:'Plan Type',
      state: 3
    },
   
  ];
  State: number| undefined
  constructor() { }

  ngOnInit(): void {
    this.list.state = this.State
  }
  back(){
     console.log(this.currentStep--)
     this.currentStep = this.currentStep --
     if (this.currentStep == -1) {
      this.currentStep = this.currentStep ++
     }
     if (this.currentStep == 0) {
       this.currentStep = 1
     }
  }
  next(){
    console.log(this.currentStep ++)
    this.currentStep = this.currentStep ++
    if (this.currentStep == 4) {
      this.currentStep = 1
    }
  }
}
