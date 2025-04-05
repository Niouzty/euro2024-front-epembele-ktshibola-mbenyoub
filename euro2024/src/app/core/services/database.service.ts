import { Injectable } from '@angular/core';
import { Column } from '../../models/Columns';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  table = [
  [
      new Column('Id_stade',true,false),
      new Column('capacité',true,false),
      new Column('ville',false,false),
      new Column('nom',false,false)
  ],
  [
    new Column('Id_ville',true,false),
    new Column('nom',true,false)
  ],
  [
    new Column('id_recontre',true,false),
    new Column('stade',true,false),
    new Column('equipe1',false,false),
    new Column('equipe2',false,false)
  ],
  ];

  constructor() { }
}
