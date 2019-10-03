import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styles: []
})
export class TablaPosicionesComponent implements OnInit {

  @Input() posiciones: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  equipo(id: any) {
    this.router.navigate(['/equipo', id]);
  }

}
