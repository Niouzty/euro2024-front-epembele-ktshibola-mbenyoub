import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArbitreWithResult } from '../../models/arbitrewithresult.model';
import { Arbitre } from '../../models/arbitre.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbitreService {
  private apiUrl = `${environment.apiUrl}/arbitres`;

  constructor(private http: HttpClient) {}

  get_all_result(): Observable<ArbitreWithResult[]>{
    return this.http.get<ArbitreWithResult[]>(`${this.apiUrl}/arbitres-result`);
  }

  get_all_arbitres(): Observable<Arbitre[]>{
    return this.http.get<Arbitre[]>(this.apiUrl);
  }

}
