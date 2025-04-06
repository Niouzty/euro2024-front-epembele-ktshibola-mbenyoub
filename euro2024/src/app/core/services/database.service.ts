import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Table } from '../../models/Table';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private apiUrl = `${environment.apiUrl}/bdd`;

  constructor(private http: HttpClient) {} 



  getSchema() : Observable<Table[]>
  {
    return this.http.get<Table[]>(this.apiUrl+'/schema');
  }

  getTable(table : string) : Observable<Table> {
    return this.http.get<Table>(this.apiUrl+"/schema/"+table);
  }

}
