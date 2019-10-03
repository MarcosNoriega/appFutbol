import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NoImagenPipe } from './pipes/no-imagen.pipe';
import { EquiposComponent } from './components/equipos/equipos.component';
import { TablaPosicionesComponent } from './components/tabla-posiciones/tabla-posiciones.component';
import { CompeticionComponent } from './components/competicion/competicion.component';
import { TablaGoleadoresComponent } from './components/tabla-goleadores/tabla-goleadores.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { TablaPlantelComponent } from './components/tabla-plantel/tabla-plantel.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorComponent } from './components/shared/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NoImagenPipe,
    EquiposComponent,
    TablaPosicionesComponent,
    CompeticionComponent,
    TablaGoleadoresComponent,
    EquipoComponent,
    TablaPlantelComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
