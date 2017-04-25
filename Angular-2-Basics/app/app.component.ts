import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`.classOne{color:white}
			.classTwo{background-color:black}`]
})
export class AppComponent { 
	public title = "Title From Variable";
	public imageLink = "http://lorempixel.com/400/200";
	public showElement = true;
	public color = 'red';
	public colors = ['red','blue','green'];
	public cone = true;
	public ctwo = true;
	public style = 'italic';
	public size = '30px';
	public name = "Test Name";
	onClick(searchStr){
		console.log(searchStr);
	}
	toggle(){
		this.cone=!this.cone;
		this.ctwo=!this.ctwo;
	}
	toggleStyle(){
		if(this.style == 'italic')
		{
			this.style='bold';
		}
		else if(this.style == 'bold')
		{
			this.style='italic';
		}
		if(this.size == '30px')
		{
			this.size='25px';
		}
		else if(this.size == '25px')
		{
			this.size='30px';
		}
		
	}
}
