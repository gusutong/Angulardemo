import { Component, OnInit, Output, Input ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-childfirst',
  templateUrl: './childfirst.component.html',
  styleUrls: ['./childfirst.component.css']
})
export class ChildfirstComponent implements OnInit {

  constructor() { }
  value:string;

  ngOnInit() {
  }
  @Output() appendValue = new EventEmitter();
  msg(e){
    if(e.keyCode == 13){
      this.append();
      this.value = "";
    }
  }
  append(){
      this.appendValue.emit(new Msg(this.value, false));
  }
}
  export class Msg{
    constructor(public title: string, public done: boolean){}
}