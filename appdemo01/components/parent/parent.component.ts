import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../../services/service-name.service';
import { ShareService } from 'src/app/services/share.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //providers:[ServiceNameService]//在当前组件调用了，局部作用域优先找当前作用域
})
export class ParentComponent implements OnInit {
  // private local;
  // constructor(private injector:Injector){
  //   this.local = this.injector.get(ServiceNameService);
  // }
  // constructor(private local:ServiceNameService) { }
  // data;
  // data1: number[] = [2,3,4,5,6];
  // ngOnInit() {
  //     if(this.local.get('list')){
  //       this.data = this.local.get('list').split(',');
  //     }else{
  //       this.data = [1,2,3,4,5,6,7];
  //     }
  //    // this.local.set('name','fu'); 
  // }
  // del(i){
  //   this.data.splice(i,1);
  // }
  constructor(private share:ShareService){}
  ngOnInit(){

  }
  add(){
    this.share.add(100);
  }
}