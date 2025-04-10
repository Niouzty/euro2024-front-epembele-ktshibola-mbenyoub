import { Injectable } from '@angular/core';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';
import { ResultatBD } from '../../models/Resultat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultatService extends AbstractServiceCRUD<ResultatBD> {

  constructor(http: HttpClient) {
    super(http);
  }
  url = "http://127.0.0.1:5000/resultats/";

  protected override getUrl(): string {
    return this.url;
  }
  
}
