import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArbitreWithResult } from '../../models/arbitrewithresult.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbitreService {
  private apiUrl = `${environment.apiUrl}/arbitres`

  constructor(private http: HttpClient) {}

  get_all_result(id_arbitre: number): Observable<ArbitreWithResult>{
    return this.http.get<{data: ArbitreWithResult}>(`${this.apiUrl}${id_arbitre}/arbitre-result`
      
    ).pipe(
      map(response => response.data)
    );
  }
}
