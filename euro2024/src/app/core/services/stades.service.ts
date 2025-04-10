import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Stade, StadeBD } from '../../models/Stade';
import { IService } from './Iservice';


@Injectable({
  providedIn: 'root'
})


export class StadesService implements IService<StadeBD> {
  constructor(private readonly http: HttpClient) {}
  url = "http://127.0.0.1:5000/stades/";


  insert(data: StadeBD[]): Observable<StadeBD> {
    console.log(data);
    console.log("fzfz");
    return this.http.post<any>(`${this.url}batch`, data);
  }

  update(column: string, id: number, newValue: string | number): Observable<StadeBD> {
    const body = { 
      column: column,    
      value: newValue   
    }   

    return this.http.patch<any>(`${this.url}${id}`, body);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<{result: boolean}>(this.url + id).pipe(
      map(res => res.result),  
      catchError(error => {
        console.error('Erreur lors de la suppression :', error);
        return of(false);  
      })
    );
  }
  

  getAll(page: number, size: number): Observable<StadeBD[]> {
    return this.http.get<{ result: StadeBD[] }>(`${this.url}?offset=${page}&limit=${size}`).pipe(
    map(res => res.result));
  }

  getById(id: number): Observable<StadeBD> {
    return this.http.get<{ result: StadeBD }>(this.url + id).pipe(
      map(response => response.result));
  }

  getWithQuery(params: any): Observable<StadeBD[]> {
    throw new Error('Method not implemented.');
  }

  countRow(): Observable<number> {
    return this.http.get<{ result: number }>(this.url+"/nombres").pipe(
      map(response => response.result) 
    );
  }

 


  
 

  

  
  
}



