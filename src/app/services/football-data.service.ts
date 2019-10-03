import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = environment.apiUrl + query;

    const headers = new HttpHeaders({
      'X-Auth-Token': environment.apikey
    });

    return this.http.get(url, {headers});
  }

  getCompetencias() {
    return this.getQuery('competitions?plan=TIER_ONE')
    .pipe(map(res => {
      return res['competitions'];
    }));
  }

  buscarEquipos(id: any) {
    return this.getQuery(`competitions/${id}/teams`);
  }

  getPosiciones(id: any) {
    return this.getQuery(`competitions/${id}/standings?standingType=TOTAL`);
  }

  getPartidos(id: any) {
    const hoy = new Date();
    const semanaPasada = new Date();

    semanaPasada.setDate(semanaPasada.getDate() - 7);

    // tslint:disable-next-line:max-line-length
    return this.getQuery(`competitions/${id}/matches?dateFrom=${this.convertirFecha(semanaPasada)}&dateTo=${this.convertirFecha(hoy)}`)
    .pipe(map(res => {
      return res['matches'];
    }));
  }

  getProximosEncuentros(id: any) {
    return this.getQuery(`competitions/${id}/matches?dateFrom=2019-03-29&dateTo=2019-04-05`)
    .pipe(map(res => {
      return res['matches'];
    }));
  }

  getGoleadores(id: any) {
    return this.getQuery(`competitions/${id}/scorers`)
    .pipe(map(res => {
      return res['scorers'];
    }));
  }

  getEquipo(id: any) {
    return this.getQuery(`teams/${id}`);
  }

  getPartidosXequipo(id: any) {

    return this.getQuery(`teams/${id}/matches/?dateFrom=2019-10-01&dateTo=2019-11-01`)
    .pipe(map(res => {
      return res['matches'];
    }));
  }

  private convertirFecha(fecha: Date) {
    let mes: string = (fecha.getMonth() + 1).toString();
    let dia: string = fecha.getDate().toString();
    let anio: string = fecha.getFullYear().toString();

    if (dia.length < 2) {
      dia = '0' + dia;
    }

    if (mes.length < 2) {
      mes = '0' + mes;
    }

    let f: String = `${anio}-${mes}-${dia}`;

    return f;
  }
}
