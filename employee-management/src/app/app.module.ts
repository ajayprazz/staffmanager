import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from "./services/employee.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { AppRoutingModule } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { MessageService } from "./services/message.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EmployeeListComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [EmployeeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
