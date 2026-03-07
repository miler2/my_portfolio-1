import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CvComponent } from './components/cv/cv.component';
import { LandpageComponent } from './components/landpage/landpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CvComponent,
    LandpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
