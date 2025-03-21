import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Stade } from '../Modeles/Stade';

@Injectable({
  providedIn: 'root'
})

export class StadesService {
  constructor(private readonly http: HttpClient) {}
  url   = "http://127.0.0.1:5000/stades/";

  getStades(page: number, taillePage: number): Observable<{ result: Stade[] }> {
    return this.http.get<{ result: Stade[] }>(`${this.url}?offset=${page}&limit=${taillePage}`);
  }
  
 

  getNombreStades(): Observable<number> {
    return this.http.get<{ result: number }>(this.url+"/nombres").pipe(
      map(response => response.result) 
    );
  }

  getStatsVisiteur(id_stade : number) : Observable<{result : number[]}>
  {
    return this.http.get<{ result: number[] }>(this.url+id_stade+'statistique/visiteurs');
  }
}
