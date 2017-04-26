import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.mdf.html',
  styles: [`input.ng-invalid{border-left:5px solid red;}
			input.ng-valid{border-left:5px solid green;}`]
})
export class AppComponent { 
	userForm = new FormGroup({
		name : new FormControl('TestName', [Validators.required, Validators.minLength(4)]),
		email : new FormControl(),
		address: new FormGroup({
			street : new FormControl(),
			city : new FormControl(),
			postalCode : new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))			
		})
	});
	onSubmit(){
		console.log(this.userForm.value);
	}
}
