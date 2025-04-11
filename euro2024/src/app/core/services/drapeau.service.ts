import { Injectable } from '@angular/core';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';
import { HttpClient } from '@angular/common/http';
import { Drapeau, DrapeauBD } from '../../models/drapeaux.model';

@Injectable({
  providedIn: 'root'
})
export class DrapeauService extends AbstractServiceCRUD<DrapeauBD> {

  constructor(http: HttpClient) {
    super(http);
  }
  url = "http://127.0.0.1:5000/drapeaux/";

  protected override getUrl(): string {
    return this.url;
  }
}
