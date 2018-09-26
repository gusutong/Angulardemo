import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:string = "angular";
 fun(){
   this.title = "hello";
 };
 delete(index){
   this.arr.splice(index,1);
 }
 txt:string;
 arr:number[]=[1,2,3,4,5];
}