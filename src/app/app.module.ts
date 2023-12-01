import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormCalculoImcComponent } from './componentes-bs/form-calculo-imc/form-calculo-imc.component';
import { FormListaAlumnosComponent } from './componentes-bs/form-lista-alumnos/form-lista-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCalculoImcComponent,
    FormListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
