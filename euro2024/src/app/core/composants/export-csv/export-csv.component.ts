import { Component, Input } from '@angular/core';
import Papa from 'papaparse';

@Component({
  selector: 'app-export-csv',
  imports: [],
  templateUrl: './export-csv.component.html',
  styleUrl: './export-csv.component.scss'
})
export class ExportCSVComponent {
  @Input({ required: true }) data!: any[];
  @Input({ required: true }) filename!: string;
  @Input() disabled: boolean = false;

  exportToCsv(): void {
    if (!this.data || this.data.length === 0) {
      console.warn('Aucune donnée à exporter');
      return;
    }

    try {
      const csv = Papa.unparse(this.data, {
        quotes: true, // Encadre les valeurs avec des guillemets
        delimiter: ',', // Séparateur par défaut
        header: true // Inclut les en-têtes
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', this.filename.endsWith('.csv') ? this.filename : `${this.filename}.csv`);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('Erreur lors de l\'export CSV:', error);
    }
  }

}
