import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-plantel',
  templateUrl: './tabla-plantel.component.html',
  styles: []
})
export class TablaPlantelComponent implements OnInit {

  @Input() plantel: any;

  constructor() { }

  ngOnInit() {
  }

}
