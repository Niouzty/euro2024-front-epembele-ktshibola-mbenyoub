import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { visualisationURL } from '../../core/constantes/constantesURL';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  visualisation = visualisationURL;

  links = [
    {url: '/visualisation', nom: 'Schema BD'},
    {url: '/stades', nom: 'Stades'},
    {url: '/matches', nom: 'Matches'},
    {url: '/spectateurs', nom: 'Spectateurs'},
    {url: '/equipes', nom: 'Equipes'},
    {url: '/joueurs', nom: 'Joueurs'}
  ];

}
