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
    return this.getQuery(`competitions/${id}/matches?status=FINISHED&dateFrom=${this.convertirFecha(semanaPasada)}&dateTo=${this.convertirFecha(hoy)}`)
    .pipe(map(res => {
      return res['matches'];
    }));
  }

  getProximosEncuentros(id: any) {
    const hoy = new Date();
    const semanaEntrante = new Date();

    semanaEntrante.setDate(semanaEntrante.getDate() + 7);

    // tslint:disable-next-line:max-line-length
    return this.getQuery(`competitions/${id}/matches?status=SCHEDULED&dateFrom=${this.convertirFecha(hoy)}&dateTo=${this.convertirFecha(semanaEntrante)}`)
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
    const hoy = new Date();
    const mesSiguiente = new Date();

    mesSiguiente.setMonth(mesSiguiente.getMonth() + 1);

    // tslint:disable-next-line:max-line-length
    return this.getQuery(`teams/${id}/matches/?dateFrom=${hoy.getFullYear()}-${this.convertirMes(hoy.getMonth())}-01&dateTo=${mesSiguiente.getFullYear()}-${this.convertirMes(mesSiguiente.getMonth())}-01`)
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

  private convertirMes(mes: number) {
    ++mes;
    let mesString = mes.toString();

    if (mesString.length < 2) {
      mesString = '0' + mes;
    }

    return mesString;
  }
}
