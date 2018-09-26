import { Injectable } from '@angular/core';
import { ServiceNameService } from 'src/app/services/service-name.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class Common1Service implements ServiceNameService {

  set(key,value){
    console.log('set');
    localStorage.setItem(key,value);
  }
  get(key){
    console.log('get方法调用了');
    return localStorage.getItem(key);
  }
  constructor(private log:LogService) { }
}
