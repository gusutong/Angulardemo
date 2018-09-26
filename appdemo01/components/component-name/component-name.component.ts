import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  runningArr: Msg[]=[];
  value:string;
  count:number = 0;

  key(e){
    if(e.keyCode==13){
      this.runningArr.unshift(new Msg(this.value,false));
      this.value="";
      this.arrcount()
    }
  };

  runningDel(ruid){
    this.runningArr.splice(ruid,1);
    this.arrcount();
  };

  change(id){
    this.runningArr[id].done = !this.runningArr[id].done;
    this.arrcount();
  }

  arrcount(){
    this.count = 0;
    this.runningArr.forEach((value,index)=>{
      if(value.done == false){
        this.count++;
      }
    })
  }

  clear(){
    this.runningArr = [];
  }
}
export class Msg{
    constructor(public title:string,public done:boolean){}
}
