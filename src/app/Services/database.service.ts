import { Injectable } from '@angular/core';
import { Column } from '../Modeles/Columns';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  table = [
    new Column('Id_stade',true,false),
    new Column('capacité',true,false),
    new Column('ville',false,false),
    new Column('nom',false,false)
  ];

  constructor() { }
}
