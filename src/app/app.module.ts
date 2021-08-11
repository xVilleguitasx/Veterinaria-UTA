import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HistoriaClinicaComponent } from './pages/historia-clinica/historia-clinica.component';
import { CrearHistoriaClinicaComponent } from './pages/crear-historia-clinica/crear-historia-clinica.component';
import { HospitalizacionComponent } from './pages/hospitalizacion/hospitalizacion.component';
import { CrearHospitalizacionComponent } from './pages/crear-hospitalizacion/crear-hospitalizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HistoriaClinicaComponent,
    CrearHistoriaClinicaComponent,
    HospitalizacionComponent,
    CrearHospitalizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
