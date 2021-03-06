import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.mdf.formbuilder.html',
  styles: [`input.ng-invalid{border-left:5px solid red;}
			input.ng-valid{border-left:5px solid green;}`]
})
export class AppComponent implements OnInit{ 
	userForm: FormGroup;
	constructor(private _formBuilder: FormBuilder){}
	ngOnInit(){
		this.userForm = this._formBuilder.group({
			name: ['TestName', [Validators.required, Validators.minLength(4)]],
			email: [],
			address: this._formBuilder.group({
				street: [],
				city: [],
				postalCode: [null, Validators.pattern('^[1-9][0-9]{4}$')]
			})
		})
	}
	
	onSubmit(){
		console.log(this.userForm.value);
	}
}
