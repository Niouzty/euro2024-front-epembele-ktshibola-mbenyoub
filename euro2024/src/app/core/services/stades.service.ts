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
    return this.http.post<any>(`${this.url}batch`, data);
  }

  update(id: number, column: string, newValue: string): Observable<StadeBD> {
    const body = { 
      column: column,    
      value: newValue   
    }   

    return this.http.patch<any>(`${this.url}${id}`, body);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<{result: boolean}>(this.url + id).pipe(
      map(res => res.result)
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

  getNumberRow(): Observable<number> {
    return this.http.get<{ result: number }>(this.url+"/nombres").pipe(
      map(response => response.result) 
    );
  }

 


  
 

  

  
  
}



