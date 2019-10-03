import { Component, OnInit } from '@angular/core';
import { FootballDataService } from 'src/app/services/football-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  competencias: any;
  loading: boolean;
  error: boolean;

  constructor(private football: FootballDataService, private router: Router) {

    this.loading = true;
    this.error = false;

    football.getCompetencias().subscribe(res => {
      console.log(res);
      this.competencias = res;
      this.loading = false;
    }, err => {
      this.error = true;
    });
  }

  ngOnInit() {
  }

  verCompeticion(id: any) {
    this.router.navigate(['/competicion', id]);
  }

}
