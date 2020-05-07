import { RegistrationComponent } from './registration/registration.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const appRoute: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path:'employee-list',
    component:EmployeeListComponent
  },
  {
    path:'edit-employee/:id',
    component:EditEmployeeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
