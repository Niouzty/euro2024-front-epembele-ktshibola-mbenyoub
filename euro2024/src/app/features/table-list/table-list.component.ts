import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Router} from '@angular/router';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent {
  tables = [
    { name: 'Équipes', path: '/equipe-list' },
    { name: 'Joueurs', path: '/joueurs' },
    { name: 'Matchs', path: '/matchs' }
  ];

  constructor(private router: Router) {}

  navigateToTable(table: {path: string}) {
    this.router.navigate([table.path]);
  }
}