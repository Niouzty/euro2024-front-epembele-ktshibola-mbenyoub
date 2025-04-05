import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Stade, StadeBD } from '../../models/Stade';


@Injectable({
  providedIn: 'root'
})


export class StadesService {
  constructor(private readonly http: HttpClient) {}
  url   = "http://127.0.0.1:5000/stades/";

 getStades(page: number, taillePage: number): Observable<Stade[]> {
  return this.http.get<{ result: any[] }>(`${this.url}?offset=${page}&limit=${taillePage}`).pipe(
    map(response => {
      if (!response?.result) return [];
      
      
      return response.result.map(stade => ({
        id: {
          value: stade.id_stade,
          url: `/stades/${stade.id_stade}`
        }, 
        nom: stade.nom,
        id_ville: stade.id_ville,
        capacite: stade.capacite
      }));
    }),
    catchError(error => {
      console.error('Erreur:', error);
      return of([]);
    })
   );
}

getStade(id: number): Observable<StadeBD> {
  return this.http.get<{ result: any }>(this.url + id).pipe(
    map(response => ({
      id_stade: response.result.id_stade,
      nom: response.result.nom,
      id_ville: response.result.id_ville,
      capacite: response.result.capacite,
    }))
  );
}

  
 

  getNombreStades(): Observable<number> {
    return this.http.get<{ result: number }>(this.url+"/nombres").pipe(
      map(response => response.result) 
    );
  }

 

  getAverageVisitorsByStade(): Observable<{ result : {stade: string, avg_visitor: number}[]}> {
    return this.http.get<{ result : {stade: string, avg_visitor: number}[]}>(`${this.url}/visitors/lenght`);
  }

  updateStade(column: string, id_stade: number | string, newValue: number | string) : Observable<any> {
    const body = { 
      column: column,    
      value: newValue   
    }   

    return this.http.patch<any>(`${this.url}${id_stade}`, body);
  }


  getMatchs(id_stade: number, trie: number): Observable<{ result: { id: number; equipe1: string; equipe2: string }[] }> {
    return this.http.get<{ result: { id: number; equipe1: string; equipe2: string }[] }>(
      `${this.url}/matchs/${id_stade}?trie=${trie}`
    );
  }

  insertStades(data: StadeBD[]): Observable<any> {
    return this.http.post<any>(`${this.url}batch`, data);
  }
  
}



