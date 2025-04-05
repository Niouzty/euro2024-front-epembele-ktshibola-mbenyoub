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
  @Input() fonctionTries: Record<string, (values: T[]) => T[]>[] = [];

  @Output() pageChange = new EventEmitter<number>();
  @Output() changeValue = new EventEmitter<{column : string,id: number | string, newValue : number | string }>();

  pageActuelle: number = 1;
  input: string = '';
  trie_actif: string[] = [];
  filteredValues: T[] = [];



  editedRow: number | string | null = null; 

  startEditing(id: number | string) {
    this.editedRow = id;
  }

  stopEditing() {
    this.editedRow = null;
  }




  ngOnChanges(changes: SimpleChanges): void {
    if (changes['objets'] || changes['fonctionTries']) {
      this.updateFilteredValues();
    }
  }

  updateFilteredValues(): void {
    if (!this.objets) return;

    let values = this.appliquerTrie();
    const recherche = this.input.toLowerCase().trim();

    this.filteredValues = values.filter(obj =>
      Object.values(obj).some(val =>
        val?.toString().trim().toLowerCase().includes(recherche)
      )
    );
  }

  get tries(): string[] {
    return [...new Set(this.fonctionTries.flatMap(record => Object.keys(record)))];
  }

  get keys(): string[] {
    return this.objets?.length > 0 ? Object.keys(this.objets[0]) : [];
  }

  appliquerTrie(): T[] {
    let valeurTriee = [...this.objets];

    for (const trie of this.trie_actif) {
      const trieFn = this.fonctionTries
        .find(record => record[trie])?.[trie];
      
      if (trieFn) {
        valeurTriee = trieFn(valeurTriee);
      }
    }

    return valeurTriee;
  }


  haveURL(value: any): boolean {
    return typeof value === 'object' && value !== null && 'url' in value;
  }
  

  toggleFiltre(key: string): void {
    this.trie_actif = this.trie_actif.includes(key) ? this.trie_actif.filter(f => f !== key) : [...this.trie_actif, key];
    
    this.updateFilteredValues();
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
  

  
}