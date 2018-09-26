import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childsecond',
  templateUrl: './childsecond.component.html',
  styleUrls: ['./childsecond.component.css']
})
export class ChildsecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() count;
  @Input() arr;
  @Output() delIndex = new EventEmitter();
  @Output() changeIndex = new EventEmitter();
  del(e){
    this.delIndex.emit(e);
  }
  change(e,i) {
    this.arr[i].done = !this.arr[i].done;
    this.changeIndex.emit(e);
  }
}
