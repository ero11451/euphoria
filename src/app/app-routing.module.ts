import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren:  () =>   import('./module/corporate/corporate.module').then(m => m.CooperateModule)},
  { path: 'enrollment', loadChildren:  () =>   import('./module/enrollment/enrollment.module').then(m => m.EnrollmentModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
