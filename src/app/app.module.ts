import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { MainPhotoPartComponent } from './main-photo-part/main-photo-part.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightBarComponent } from './right-bar/right-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeMainComponent,
    MainPhotoPartComponent,
    LeftSideComponent,
    RightBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
