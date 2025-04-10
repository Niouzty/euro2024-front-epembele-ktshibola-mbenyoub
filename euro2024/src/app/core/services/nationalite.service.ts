import { Injectable } from '@angular/core';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';
import { NationaliteBD } from '../../models/Nationalite';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NationaliteService extends AbstractServiceCRUD<NationaliteBD>{

  constructor(http: HttpClient) {
    super(http);
  }
  
  url = "http://127.0.0.1:5000/villes/";

  protected override getUrl(): string {
    return this.url;
  }
}
