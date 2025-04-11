import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Stade, StadeBD } from '../../models/stade.model';
import { IService } from './Iservice';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';


@Injectable({
  providedIn: 'root'
})


export class StadesService extends AbstractServiceCRUD<StadeBD>  {
  
  constructor(http: HttpClient) {
    super(http);
  }
  url = "http://127.0.0.1:5000/stades/";

  protected override getUrl(): string {
    return this.url;
  }
  
  

 


  
 

  

  
  
}



