import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Table } from '../../models/Table';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private apiUrl = `${environment.apiUrl}/database/`;

  constructor(private http: HttpClient) {} 



  getSchema() : Observable<Table[]>
  {
    return this.http.get<{result : Table[]}>(this.apiUrl).pipe(
      map(r => r.result)
    );
  }

  getTable(table: string): Observable<Table> {
    return this.http.get<{ result: Table }>(this.apiUrl + table).pipe(
      map(res => res.result)   
  );
  }
  
}
