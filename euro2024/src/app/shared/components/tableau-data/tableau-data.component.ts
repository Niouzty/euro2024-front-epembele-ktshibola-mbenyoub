import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tableau-data',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './tableau-data.component.html',
})
export class TableauDataComponent<T extends Record<string, any> & { id: { value: number | string, url: string } }> implements OnChanges {

  @Input({ required: true }) titre!: string;
  @Input({ required: true }) objets!: T[];
  @Input({ required: true }) pageMax!: number;
  @Input() fonctionTries: Record<string, (values: T[]) => T[]>[] = [];
  @Input() createLink: string = '';
  @Input() colonnesPersonnalisees: { [key: string]: (value: any) => string } = {};
  @Input() texteVide: string = 'Aucune donnée trouvée';

  @Output() pageChange = new EventEmitter<number>();
  @Output() changeValue = new EventEmitter<{ column: string, id: number | string, newValue: any }>();
  @Output() onDelete = new EventEmitter<number | string>();
  @Output() onEdit = new EventEmitter<number | string>();

  pageActuelle: number = 1;
  input: string = '';
  trie_actif: string[] = [];
  filteredValues: T[] = [];
  editedRow: number | string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['objets'] || changes['fonctionTries']) {
      this.updateFilteredValues();
    }
  }

  startEditing(id: number | string): void {
    this.editedRow = id;
  }

  stopEditing(): void {
    this.editedRow = null;
  }

  updateFilteredValues(): void {
    if (!this.objets) return;

    let values = this.appliquerTrie();
    const recherche = this.input.toLowerCase().trim();

    this.filteredValues = values.filter(obj =>
      Object.values(obj).some(val => {
        if (typeof val === 'object' && val !== null) return false;
        return val?.toString().trim().toLowerCase().includes(recherche);
      })
    );
  }

  get tries(): string[] {
    return [...new Set(this.fonctionTries.flatMap(record => Object.keys(record)))];
  }

  get keys(): string[] {
    if (!this.objets || this.objets.length === 0) return [];
    return Object.keys(this.objets[0]).filter(key => key !== 'id');
  }

  appliquerTrie(): T[] {
    let valeurTriee = [...this.objets];

    for (const trie of this.trie_actif) {
      const trieFn = this.fonctionTries.find(record => record[trie])?.[trie];
      if (trieFn) valeurTriee = trieFn(valeurTriee);
    }

    return valeurTriee;
  }

  toggleFiltre(key: string): void {
    this.trie_actif = this.trie_actif.includes(key) 
      ? this.trie_actif.filter(f => f !== key) 
      : [...this.trie_actif, key];
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

  miseAJourValeur(id: number | string, column: string, newValue: any): void {
    this.changeValue.emit({ id, column, newValue });
    this.stopEditing();
  }
}