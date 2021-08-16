import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearHistoriaClinicaComponent } from './pages/crear-historia-clinica/crear-historia-clinica.component';
import { CrearHospitalizacionComponent } from './pages/crear-hospitalizacion/crear-hospitalizacion.component';
import { CrearPostQuirurgicoComponent } from './pages/crear-post-quirurgico/crear-post-quirurgico.component';
import { CrearQuirurgicoComponent } from './pages/crear-quirurgico/crear-quirurgico.component';
import { HistoriaClinicaComponent } from './pages/historia-clinica/historia-clinica.component';
import { HospitalizacionComponent } from './pages/hospitalizacion/hospitalizacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { PostQuirurgicoComponent } from './pages/post-quirurgico/post-quirurgico.component';
import { QuirurgicoComponent } from './pages/quirurgico/quirurgico.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:LoginComponent},
  {path:'inicio', component:InicioComponent},
  {path:'historia', component:HistoriaClinicaComponent},
  {path:'crearhistoria', component:CrearHistoriaClinicaComponent},
  {path:'hospitalizacion', component:HospitalizacionComponent},
  {path:'crearhospitalizacion', component:CrearHospitalizacionComponent},
  {path:'quirurgico', component:QuirurgicoComponent},
  {path:'crearquirurgico', component:CrearQuirurgicoComponent},
  {path:'postquirurgico', component:PostQuirurgicoComponent},
  {path:'crearpostquirurgico', component:CrearPostQuirurgicoComponent},
  {path:'usuairos', component:UsuariosComponent},
  {path:'mascotas', component:MascotasComponent},
  {path:'turnos', component:TurnosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
