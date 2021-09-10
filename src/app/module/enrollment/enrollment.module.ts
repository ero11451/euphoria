import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorporatescreenComponent } from './corporate/corporatescreen/corporatescreen.component';
import { RetailscreenComponent } from './retailscreen/retailscreen.component';
import { PlanComponent } from './corporate/plan/plan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedcomponentModule } from 'src/app/sharedcomponent/sharedcomponent.module';
import { CorporatedataComponent } from 'src/app/module/enrollment/corporate/corporatedata/corporatedata.component';
import { DependantdataComponent } from './corporate/dependantdata/dependantdata.component';

const routes: Routes = [
  { path: 'corporate', component: CorporatescreenComponent },
  { path: 'retail', component: RetailscreenComponent },
  { path: '**', component: RetailscreenComponent},
];


@NgModule({
  
  exports: [RouterModule],
  declarations: [
    CorporatescreenComponent,
    PlanComponent,
    RetailscreenComponent,
    CorporatedataComponent,
    DependantdataComponent,
  ],
  imports: [
  
  RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedcomponentModule,
    CommonModule
  ]
})
export class EnrollmentModule { }
