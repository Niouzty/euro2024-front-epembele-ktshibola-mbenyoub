import { Injectable } from '@angular/core';
import { Equipe, EquipeBD } from '../../models/equipe.model';
import { EquipeCompare } from '../../models/equipes-compare';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';

@Injectable({
  providedIn: 'root'
})
export class EquipesService extends AbstractServiceCRUD<EquipeBD> {

  constructor(private httsp: HttpClient){
    super(httsp)
  }
  protected override getUrl(): string {
    return "http://127.0.0.1:5000/equipes/";
  }
  
}