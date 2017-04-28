import {Component, OnInit} from '@angular/core'
import { EmployeeService } from './employee.service';

@Component({
	selector: 'employee-list',
	template: `<h2>Employee List</h2>
			   <h3>{{errMsg}}</h3>
			   <ul *ngFor="let employee of employees">
					<li>{{employee.name}} : {{employee.gender}}</li>
			   </ul>`
})

export class EmployeeListComponent implements OnInit{
	employees = [];
	errMsg: string;
	constructor(private _employeeService: EmployeeService){}
	
	ngOnInit(){
		this._employeeService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData,
					   resEmployeeError => this.errMsg = resEmployeeError);
		//this.employees = this._employeeService.getEmployees();
	}
}