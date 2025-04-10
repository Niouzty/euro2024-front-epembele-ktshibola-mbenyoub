import { Injectable } from '@angular/core';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';
import { Poste, PosteBD } from '../../models/Poste';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosteService  extends AbstractServiceCRUD<PosteBD>{

  constructor(http: HttpClient) {
    super(http);
  }
  url = "http://127.0.0.1:5000/postes/";

  protected override getUrl(): string {
    return this.url;
  }
}
