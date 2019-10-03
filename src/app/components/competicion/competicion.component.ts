import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballDataService } from '../../services/football-data.service';

@Component({
  selector: 'app-competicion',
  templateUrl: './competicion.component.html',
  styles: []
})
export class CompeticionComponent implements OnInit {

  posiciones: any;
  partidos: any;
  proximos: any;
  goleadores: any;
  loading: boolean;
  error: boolean;

  constructor(private football: FootballDataService, private activatedRoute: ActivatedRoute) {

    this.loading = true;
    this.error = false;

    activatedRoute.params.subscribe(params => {
      this.getPosiciones(params['id']);
      this.getPartidos(params['id']);
      this.getProximosEncuentros(params['id']);
      this.getGoleadores(params['id']);
    });
   }

  ngOnInit() {
  }

  getPosiciones(id: any) {
    this.football.getPosiciones(id).subscribe(res => {
      console.log(res);
      this.posiciones = res;
      this.loading = false;
    }, err => {
      this.error = true;
    });
  }

  getPartidos(id: any) {
    this.football.getPartidos(id).subscribe(res => {
      console.log(res);
      this.partidos = res;
      this.loading = false;
    }, err => {
      this.error = true;
    });
  }

  getProximosEncuentros(id: any) {
    this.football.getProximosEncuentros(id).subscribe(res => {
      console.log(res);
      this.proximos = res;
      this.loading = false;
    }, err => {
      this.error = true;
    });
  }

  getGoleadores(id: any) {
    this.football.getGoleadores(id).subscribe(res => {
      console.log(res);
      this.goleadores = res;
      this.loading = false;
    }, err => {
      this.error = true;
    });
  }

}
