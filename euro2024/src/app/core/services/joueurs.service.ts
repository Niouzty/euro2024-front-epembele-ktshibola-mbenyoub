import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs';
import { Joueur, JoueurBD } from '../../models/joueur.model';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';

@Injectable({
  providedIn: 'root'
})

export class JoueursService extends AbstractServiceCRUD<JoueurBD> {

  constructor(http: HttpClient) {
    super(http);
  }
  
  url = "http://127.0.0.1:5000/joueurs/";

  protected override getUrl(): string {
    return this.url;
  }
  

}
