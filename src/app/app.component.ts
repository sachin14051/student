import { Component } from '@angular/core';
import { Istudent } from './module/module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student';

  stdObj:Array<Istudent>=[{
    fname: "jhon",
    lname : "dow",
    email : "jhondoe@gmail.com",
    contact : 123456789
  }]

  stdli(eve:any){
  this.stdObj.push(eve)
  console.log(this.stdObj)
  }
}
