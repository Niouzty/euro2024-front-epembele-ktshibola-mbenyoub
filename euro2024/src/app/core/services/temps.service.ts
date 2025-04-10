import { Injectable } from '@angular/core';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';
import { TempsBD } from '../../models/Temps';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempsService extends AbstractServiceCRUD<TempsBD> {

  constructor(http: HttpClient) {
    super(http);
  }
  url = "http://127.0.0.1:5000/temps/";

  protected override getUrl(): string {
    return this.url;
  }
}
