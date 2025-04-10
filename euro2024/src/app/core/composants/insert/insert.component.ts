import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table } from '../../../models/Table';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent<T extends Record<string, any>> {
  @Input() table!: Table;
  @Output() inserted = new EventEmitter<T[]>(); 

  inputValues: T = {} as T; 
  listInput: T[] = []; 
  updateRow: number = -1;

  get namesColumns(): string[] {
    return this.table.columns;
  }

  rowUpdate(i: number): void {
    this.updateRow = i;
  }

  validUpdate(): void {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir valider cette modification ?');
    if (!confirmed) {
      this.listInput[this.updateRow] = { ...this.listInput[this.updateRow] };
    }
    this.updateRow = -1;
  }

  submit(): void {
    if (this.isValid()) {
      this.listInput.push({ ...this.inputValues }); 
      this.resetForm();
    }
  }

  submitFinal(): void {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir valider ces inserts ?');
    if (!confirmed) {
      this.inserted.emit(this.listInput);
    }
    this.listInput = [];
    this.resetForm();
  }

  private isValid(): boolean {
    return this.table.columns.every(c => {
      const value = this.inputValues[c];
      return value !== null && 
             value !== undefined && 
             value.toString().trim() !== '';
    });
  }

  private resetForm(): void {
    this.inputValues = {} as T; 
  }
}
