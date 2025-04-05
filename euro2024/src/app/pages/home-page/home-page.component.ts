import { Component } from '@angular/core';
import { Table } from '../../models/Table';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  titre! : string;
  table!: Table;
}
