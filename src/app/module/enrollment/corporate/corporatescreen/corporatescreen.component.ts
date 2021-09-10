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
      icon:'fas fa-ballot',
      title:'Corporate Data',
      state: 1
    },
    {
      icon:'fa fa-user',
      title:'Dependant Data',
      state: 2
    }, 
    {
      icon:'far fa-ballot',
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
   
  }
  next(){
    console.log(this.currentStep ++)
    return this.currentStep = this.currentStep ++
  }
}
