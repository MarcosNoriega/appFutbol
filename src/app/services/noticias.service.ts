import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  page = 0;

  constructor(private http: HttpClient) { }

  private query(query: string) {
    const url = environment.apiNotUrl + query;

    const headers = new HttpHeaders({
      'X-Api-Key': environment.apiNotKey
    });

    return this.http.get(url, {headers});
  }

  getNoticiasDeporte() {
    ++this.page;
    return this.query(`top-headlines?country=ar&category=sports&page=${this.page}`)
    .pipe(map(res => {
      return res['articles'];
    }));
  }
}
