import { Component, Input } from '@angular/core';
import { Table } from '../../../models/table.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input({ required: false }) nom!: string;
  @Input({ required: true }) table!: Table;

  constructor(private router: Router) {}

  navigateToTable() {
    this.router.navigate([`/${this.table.table_name}s`]);
  }
}