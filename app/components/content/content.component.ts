import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  municipio = 'municipio';
  munData: {}[] = [];

  constructor(private _ds: DataService) {
    console.log(_ds.departmentData);

  }

  ngOnInit() {
  }

  ChangeMunicipioSelecionado(newSortOrder: string) {

    this.municipio = newSortOrder;
    this._ds.loadVotacion(this.municipio);
  }
}
