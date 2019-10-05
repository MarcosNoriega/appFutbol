import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styles: []
})
export class CardNoticiasComponent implements OnInit {

  @Input() noticia: any;
  constructor() { }

  ngOnInit() {
  }

}
