import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArbitreWithResult } from '../../models/arbitrewithresult.model';
import { Arbitre, ArbitreBD } from '../../models/arbitre.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';

@Injectable({
  providedIn: 'root'
})
export class ArbitreService extends AbstractServiceCRUD<ArbitreBD>{
  private apiUrl = `${environment.apiUrl}/arbitres/`;

  constructor(http: HttpClient) {
    super(http);
  }
  
  protected override getUrl(): string {
    return this.apiUrl;
  }

  get_all_result(): Observable<ArbitreWithResult[]>{
    return this.http.get<ArbitreWithResult[]>(`${this.apiUrl}/arbitres-result`);
  }

  get_all_arbitres(): Observable<Arbitre[]>{
    return this.http.get<Arbitre[]>(this.apiUrl);
  }

}
