import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildfirstComponent } from './components/childfirst/childfirst.component';
import { ChildsecondComponent } from './components/childsecond/childsecond.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildfirstComponent,
    ChildsecondComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
