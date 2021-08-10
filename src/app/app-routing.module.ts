import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearHistoriaClinicaComponent } from './pages/crear-historia-clinica/crear-historia-clinica.component';
import { HistoriaClinicaComponent } from './pages/historia-clinica/historia-clinica.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:LoginComponent},
  {path:'inicio', component:InicioComponent},
  {path:'historia', component:HistoriaClinicaComponent},
  {path:'crearhistoria', component:CrearHistoriaClinicaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
