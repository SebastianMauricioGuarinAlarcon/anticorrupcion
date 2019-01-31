import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any = [];

  municipios: {}[] = [];
  votacion_municipios = [];
  departmentData: {}[] = [];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http.get('assets/data/consulta_anticorrupcion_municipios.json')
      .subscribe(res => {
        this.data = res;
        for (const item of this.data) {
          if (item['departamento'] === 'BOYACA') {
            this.departmentData.push(item);
            this.municipios.push(item['municipio']);
          }
        }
      });
  }

  loadVotacion(municipio) {
    this.clearMunicipio();
    this.http.get('assets/data/consulta_anticorrupcion_municipios.json')
      .subscribe(res => {
        for (const item of this.departmentData) {
          if (item['municipio'] === municipio) {
            this.votacion_municipios.push(item['votacion']);
          }
        }
      });
  }
  clearMunicipio(){
    this.votacion_municipios = [];
  }
}
