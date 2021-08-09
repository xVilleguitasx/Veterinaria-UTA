import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaclinicaComponent } from './componentes/historiaclinica/historiaclinica.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:HistoriaclinicaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
