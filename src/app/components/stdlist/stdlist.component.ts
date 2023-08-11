import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istudent } from 'src/app/module/module';

@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.scss']
})
export class StdlistComponent implements OnInit {

  @Output() customEvent: EventEmitter<Istudent> = new EventEmitter<Istudent>();

  @ViewChild("fnameControl") fnameControl !: ElementRef
  @ViewChild("lnameControl") lnameControl !: ElementRef
  @ViewChild("emailControl") emailControl !: ElementRef
  @ViewChild("contactControl") contactControl !: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    let fnameControl = this.fnameControl.nativeElement.value;
    let lnameControl = this.lnameControl.nativeElement.value;
    let emailControl = this.emailControl.nativeElement.value;
    let contactControl = this.contactControl.nativeElement.value

    let stdobj: Istudent = {
      fname: fnameControl,
      lname: lnameControl,
      email: emailControl,
      contact: contactControl
    }
    this.customEvent.emit(stdobj)
    console.log(stdobj)
    this.fnameControl.nativeElement.value = ''
    this.lnameControl.nativeElement.value = ''
    this.emailControl.nativeElement.value =''
    this.contactControl.nativeElement.value =''
  }
}






