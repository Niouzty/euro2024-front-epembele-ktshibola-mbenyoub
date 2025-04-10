import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { table } from 'console';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  links = [
    {table:"Stades",url:"/stades"},
    {table:"Rencontres",url:"/rencontres"},
    {table:"Joueurs",url:"/joueurs"},
    {table:"Resultats", url:"/resultats"},
    {table:"Temps",url:"/temps"},  //
    {table:"Postes", url:"/postes"},//
    {table:"Arbitres",url:"/arbitres"},
    {table:"Nationalites",url:"/nationalites"},
    {table:"Drapeaux",url:"/drapeaux"},//
    {table:"Villes",url:"/villes"}
  ]

}
