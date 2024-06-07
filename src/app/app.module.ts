import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section-1/section-1.component';
import { Section2Component } from './components/section-2/section-2.component';
import { Section3Component } from './components/section-3/section-3.component';

import { Section4Component } from './components/section-4/section-4.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FormsModule,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
