import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { ShareService } from 'src/app/services/share.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  index = 0;
  log(msg){
    console.log(`这是${this.index++}次调用，调用的钩子函数是${msg}`);
  }
  constructor(private share:ShareService) { 
    // this.log('constructor');
    // console.log(this.arr);
  }

  ngOnInit() {
    this.arr = this.share.data;
    // this.log('ngOnInit');
    // console.log(this.arr);
  }
  // ngOnChanges() {
  //   this.log('ngOnChanges');
  //   // for(var i in changes){
  //   //   for(var j in changes[i]){
  //   //     console.log(changes[i][j]);
  //   //   }
  //   // }
  // }
  // ngDoCheck() {
  //   this.log('ngDoCheck');
  // }
  // ngAfterContentChecked(){
  //   this.log('ngAfterContentChecked');   
  // }
  // ngAfterViewChecked(){
  //   this.log('ngAfterViewChecked');
  // }
  // ngAfterContentInit(){
  //   this.log('ngAfterContentInit');
  // }
  // ngAfterViewInit() {
  //   this.log('ngAfterViewInit');
  // }
  @Input() arr;//从父组件引入过来的数据
  @Output() delIndex = new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
}
