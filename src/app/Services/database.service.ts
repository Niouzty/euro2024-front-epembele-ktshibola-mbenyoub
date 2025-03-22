import { Injectable } from '@angular/core';
import { Columns } from '../Modeles/Columns';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  table = [
    new Columns('Id_stade',true,false),
    new Columns('capacité',true,false),
    new Columns('ville',false,false),
    new Columns('nom',false,false)
  ];

  constructor() { }
}
