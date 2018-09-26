import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentNameComponent } from './components/component-name/component-name.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ServiceNameService } from './services/service-name.service';
import { Common1Service } from 'src/app/services/common1.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide:ServiceNameService,useClass:Common1Service},ServiceNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
