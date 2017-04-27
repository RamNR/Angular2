import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService{
	getEmployees(){
		return [
			{"id":1, "name": "Test1", "gender":"Male"},
			{"id":2, "name": "Test2", "gender":"Female"}
		]
	}
}