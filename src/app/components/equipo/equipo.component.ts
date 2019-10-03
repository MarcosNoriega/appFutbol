import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballDataService } from 'src/app/services/football-data.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: []
})
export class EquipoComponent implements OnInit {

  equipo: any;
  partidos: any;
  loading: boolean;
  error: boolean;

  constructor(private activatedRouter: ActivatedRoute, private football: FootballDataService) { 

    this.loading = true;
    this.error = false;

    activatedRouter.params.subscribe(params => {
      this.getEquipo(params['id']);
      this.getPartidos(params['id']);
    });
  }

  ngOnInit() {
  }

  getEquipo(id: any) {
    this.football.getEquipo(id).subscribe(res => {
      console.log(res);
      this.equipo = res;
      this.loading = false;
    }, err => {
      this.error = true;
    });
  }

  getPartidos(id: any) {
    this.football.getPartidosXequipo(id).subscribe(res => {
      console.log(res);
      this.partidos = res;
      this.loading = false;
    }, err => {
      this.error = true;
    });
  }

}
