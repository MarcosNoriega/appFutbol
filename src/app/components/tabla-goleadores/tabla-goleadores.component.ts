import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-goleadores',
  templateUrl: './tabla-goleadores.component.html',
  styles: []
})
export class TablaGoleadoresComponent implements OnInit {

  @Input() goleadores: any;

  constructor() { }

  ngOnInit() {
  }

}
