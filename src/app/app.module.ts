import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [  
    MainComponent, TitleComponent, ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
