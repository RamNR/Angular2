import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeeService{
	private _url: string = "apidata/employeedata.json";
	constructor(private _http: Http){}
	getEmployees(){
		return this._http.get(this._url)
			.map((response:Response) => response.json())
			.catch(this._errHandler);
/*		return [
			{"id":1, "name": "Test1", "gender":"Male"},
			{"id":2, "name": "Test2", "gender":"Female"}
		]*/
	}
	_errHandler(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
}