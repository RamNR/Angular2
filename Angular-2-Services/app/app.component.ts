import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  template: `<h1>RJ Enterprises</h1>
			 <employee-list></employee-list>`,
  providers : [EmployeeService]
})
export class AppComponent {
}
