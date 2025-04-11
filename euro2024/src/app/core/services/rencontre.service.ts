import { Injectable } from '@angular/core';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';
import { RencontreBD } from '../../models/Rencontre';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RencontreService extends AbstractServiceCRUD<RencontreBD>{

  constructor(http: HttpClient) {
    super(http);
  }
  
  url = "http://127.0.0.1:5000/rencontres/";

  protected override getUrl(): string {
    return this.url;
  }
}
 