import { Injectable } from '@angular/core';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';
import { HttpClient } from '@angular/common/http';
import { VilleBD } from '../../models/Villes';

@Injectable({
  providedIn: 'root'
})
export class VilleService extends AbstractServiceCRUD<VilleBD> {
  constructor(http: HttpClient) {
    super(http);
  }
  
  url = "http://127.0.0.1:5000/villes/";

  protected override getUrl(): string {
    return this.url;
  }
}
