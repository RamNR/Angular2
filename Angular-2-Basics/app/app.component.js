"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Title From Variable";
        this.imageLink = "http://lorempixel.com/400/200";
        this.showElement = true;
        this.color = 'red';
        this.colors = ['red', 'blue', 'green'];
        this.cone = true;
        this.ctwo = true;
        this.style = 'italic';
        this.size = '30px';
        this.name = "Test Name";
    }
    AppComponent.prototype.onClick = function (searchStr) {
        console.log(searchStr);
    };
    AppComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    AppComponent.prototype.toggleStyle = function () {
        if (this.style == 'italic') {
            this.style = 'bold';
        }
        else if (this.style == 'bold') {
            this.style = 'italic';
        }
        if (this.size == '30px') {
            this.size = '25px';
        }
        else if (this.size == '25px') {
            this.size = '30px';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styles: [".classOne{color:white}\n\t\t\t.classTwo{background-color:black}"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map