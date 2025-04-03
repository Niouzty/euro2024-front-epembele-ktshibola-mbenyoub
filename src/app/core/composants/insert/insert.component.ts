import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from '../../../Modeles/Table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent {
  @Input({ required: true }) table!: Table;
  @Output() inserted = new EventEmitter<Record<string, any>[]>(); 

  inputValues: Record<string, any> = {}; 
  listInput: Record<string, any>[] = [];
  updateRow: number = -1;

  get namesColumns(): string[] {
    return this.table.getNom();
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
      this.listInput.push({...this.inputValues}); 
      this.resetForm();
    }
  }

  submitFinal(): void {
    this.inserted.emit(this.listInput);
    this.listInput = [];
    this.resetForm();
  }

  private isValid(): boolean {
    return this.table.getNom().every(c => {
      const value = this.inputValues[c];
      return value !== null && 
             value !== undefined && 
             value.toString().trim() !== '';
    });
  }

  private resetForm(): void {
    this.inputValues = {};
  }
}