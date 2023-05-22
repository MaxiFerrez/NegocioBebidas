import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoWebComponent } from './contenido-web/contenido-web.component';
import { FormsModule } from '@angular/forms';
import { FormInicialComponent } from './form-inicial/form-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoWebComponent,
    FormInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
