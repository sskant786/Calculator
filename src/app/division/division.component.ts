import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  val1!: any;
  val2!: any;
  val3!: any;

  constructor() { }

  ngOnInit(): void {
  }

  getquotient(){
    this.val3 = this.val1 / this.val2;
    console.log(this.val3);
    
    if(this.val2 === 0 ){
      this.val3 = 'Anything Divide By 0 is Infinity';
    }
    if(this.val1 === 0 && this.val2 ===0 ){
      this.val3 = '0';
    }
    }

}
