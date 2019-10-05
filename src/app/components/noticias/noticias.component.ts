import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  noticias: any[] = [];
  loading = true;
  error = false;

  constructor(private noticiasService: NoticiasService) {
    this.noticiasService.getNoticiasDeporte().subscribe((res: any[]) => {
      this.noticias.push(...res);
      this.loading = false;
    }, err => {
      this.error = true;
    });
   }

  ngOnInit() {
  }

  onScroll() {
    this.noticiasService.getNoticiasDeporte().subscribe((res: any[]) => {
      this.noticias.push(...res);
    });
  }

}
