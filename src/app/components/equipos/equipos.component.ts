import { Component, OnInit } from '@angular/core';
import { FootballDataService } from 'src/app/services/football-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styles: []
})
export class EquiposComponent implements OnInit {

  equipos: any;

  constructor(private football: FootballDataService, private activatedRouter: ActivatedRoute) {

    activatedRouter.params.subscribe(params => {
      this.buscarEquipos(params['id']);
    });
   }

  ngOnInit() {
  }

  buscarEquipos(id: any) {
    this.football.buscarEquipos(id).subscribe(res => {
      console.log(res);
      this.equipos = res;

    });
  }

}
