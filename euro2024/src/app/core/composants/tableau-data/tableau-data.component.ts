import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tableau-data',
  imports: [FormsModule,RouterLink],
  templateUrl: './tableau-data.component.html',
  styleUrl: './tableau-data.component.scss'
})
export class TableauDataComponent<T extends Record<string, any> & { id: {value : number | string, url: string}}> implements OnChanges {

  @Input({ required: true }) titre!: string;
  @Input({ required: true }) objets!: T[];
  @Input({ required: true }) pageMax!: number;
  @Input() tries: Record<string,number> = {};
  @Input() filtres: Record<string,number> = {};


  @Output() pageChange = new EventEmitter<number>();
  @Output() changeValue = new EventEmitter<{column : string,id: number | string, newValue : number | string }>();
  @Output() deleteRow = new EventEmitter<number | string>();
  @Output() trieChange = new EventEmitter<number>();
  @Output() filtreChange = new EventEmitter<number>();

  pageActuelle: number = 1;
  input: string = '';
  filteredValues: T[] = [];



  editedRow: number | string | null = null; 

  startEditing(id: number | string) {
    this.editedRow = id;
  }

  stopEditing() {
    this.editedRow = null;
  }




  ngOnChanges(changes: SimpleChanges): void {
    if (changes['objets']) {
      this.recherche();
    }
  }

  recherche(): void {
    if (!this.objets) 
      return;

    const recherche = this.input.toLowerCase().trim();

    this.filteredValues = this.objets.filter(obj =>
      Object.values(obj).some(val =>
        val?.toString().trim().toLowerCase().includes(recherche)
      )
    );
  }

  get triesK(): string[] {
    return Object.keys(this.tries);
  }

  get filtresK(): string[] {
    return Object.keys(this.filtres);
  }

  get keys(): string[] {
    return this.objets?.length > 0 ? Object.keys(this.objets[0]) : [];
  }

  


  haveURL(value: any): boolean {
    return typeof value === 'object' && value !== null && 'url' in value;
  }
  

  toggleFiltre(key: string): void {
    this.filtreChange.emit(this.filtres[key]);    
  }

  toggleTrie(key: string): void {
    this.trieChange.emit(this.tries[key]);    
  }

  suivant(): void {
    if (this.pageActuelle < this.pageMax) {
      this.pageChange.emit(++this.pageActuelle);
    }
  }

  precedent(): void {
    if (this.pageActuelle > 1) {
      this.pageChange.emit(--this.pageActuelle);
    }
  }

  

  miseAJourValeur(id: number | string, column: string, newValue: number | string) {
    this.changeValue.emit({ id, column, newValue });
  }
  
  onRightClick(event: MouseEvent, id: string | number) {
    event.preventDefault();
    this.deleteRow.emit(id);
  }

  
}