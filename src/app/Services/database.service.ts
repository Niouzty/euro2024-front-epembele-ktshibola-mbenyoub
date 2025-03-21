import { Injectable } from '@angular/core';
import { Columns } from '../Modeles/Columns';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  table = [
    new Columns('id_user',true,true),
    new Columns('prenom',true,false),
    new Columns('age',false,true),
    new Columns('adresse',false,false)
  ];

  constructor() { }
}
