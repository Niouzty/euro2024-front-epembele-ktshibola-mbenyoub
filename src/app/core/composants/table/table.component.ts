import { Component, Input } from '@angular/core';
import { Column } from '../../../Modeles/Columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input({ required: false })
  nom!: string;

  @Input({ required: true })
  columns!: Column[];

  getUrl(column: Column): string {
    return column.isFK ? `https://example.com/${column.nom}` : '';
  }

  createBalise(column: Column): string {
    return column.isFK ? this.createBaliseFK(column) : this.createSBalise(column);
  }

  private createBaliseFK(column: Column): string {
    const url = this.getUrl(column);
    return `<a class='${this.getCssClass(column)}' href='${url}'>${column.nom}</a>`;
  }

  private createSBalise(column: Column): string {
    return `<p class='${this.getCssClass(column)}'>${column.nom}</p>`;
  }

  private getCssClass(column: Column): string {
    let classes = "column-field"; // Style de base pour tous les champs

    if (column.isPK) {
        classes += " pk-field"; // Ajoute le style PK (soulignement rouge)
    }

    return classes.trim(); // Retire les espaces inutiles
  }
}