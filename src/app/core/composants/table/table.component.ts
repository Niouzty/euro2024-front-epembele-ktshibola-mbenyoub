import { Component, Input } from '@angular/core';
import { Columns } from '../../../Modeles/Columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input({ required: true })
  nom!: string;

  @Input({ required: true })
  columns!: Columns[];

  getUrl(column: Columns): string {
    return column.isFK ? `https://example.com/${column.nom}` : '';
  }

  createBalise(column: Columns): string {
    return column.isFK ? this.createBaliseFK(column) : this.createSBalise(column);
  }

  private createBaliseFK(column: Columns): string {
    const url = this.getUrl(column);
    return `<a class='${this.getCssClass(column)}' href='${url}'>${column.nom}</a>`;
  }

  private createSBalise(column: Columns): string {
    return `<p class='${this.getCssClass(column)}'>${column.nom}</p>`;
  }

  private getCssClass(column: Columns): string {
    let classes = "column-field"; // Style de base pour tous les champs

    if (column.isPK) {
        classes += " pk-field"; // Ajoute le style PK (soulignement rouge)
    }

    return classes.trim(); // Retire les espaces inutiles
  }
}