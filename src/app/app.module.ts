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
import { Section1dowloandComponent } from './components/section1dowloand/section1dowloand.component';
import { Error404Component } from './components/error-404/error-404.component';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HeaderComponent,
    FormsModule,
    Error404Component,
    Section1dowloandComponent,
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
