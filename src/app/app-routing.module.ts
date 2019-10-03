import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { CompeticionComponent } from './components/competicion/competicion.component';
import { EquipoComponent } from './components/equipo/equipo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'equipos/:id', component: EquiposComponent},
  {path: 'competicion/:id', component: CompeticionComponent},
  {path: 'equipo/:id', component: EquipoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
