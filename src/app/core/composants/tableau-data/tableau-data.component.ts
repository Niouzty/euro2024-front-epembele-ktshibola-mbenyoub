import { Component, EventEmitter, Input, Output,NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-tableau-data',
  imports: [FormsModule], 
  templateUrl: './tableau-data.component.html',
  styleUrl: './tableau-data.component.scss'
})


export class TableauDataComponent<T extends Record<string, any>> implements OnInit{
  @Input({ required: true }) titre!: string; 
  @Input({ required: true }) objets!: T[];  
  @Input({ required: true }) pageMax!: number; 
  @Input() fonctionTries: Record<string, (values: T[]) => T[]>[] = [];

  
  ngOnInit() {
    // Affiche la longueur du tableau d'inputs dans la console
    console.log(this.fonctionTries.length);
  }

  pageActuelle: number = 1;
  @Output() pageChange = new EventEmitter<number>(); 

  input: string = ''; 
  trie_actif: string[] = [];







  
  get tries(): string[] {
  return Array.from(
    new Set(this.fonctionTries.flatMap(record => Object.keys(record)))
  );
}


  
  get keys(): string[] {
    return this.objets.length > 0 ? Object.keys(this.objets[0]) : [];
  }
  

  get values(): T[][] {
    return this.objets.map(obj => this.keys.map(key => obj[key]));
  }

  get finalValues(): T[] {
    let values: T[] = this.appliquerTrie();
    let recherche = this.input.toLowerCase().trim(); 
  
    return values.filter(obj =>
      Object.values(obj).some(val => 
        val.toString().trim().toLowerCase().includes(recherche) 
      )
    );
  }
  

  appliquerTrie(): T[] {
    let valeurTriee: T[] = this.objets;

    for (const trie of this.trie_actif) {
      const recordTrouve = this.fonctionTries.find(record => record.hasOwnProperty(trie));

      if (recordTrouve) {
        const funTrie = recordTrouve[trie];
        if (funTrie) {
          valeurTriee = funTrie(valeurTriee);
        }
      }
    }

    return valeurTriee;
  }

  toggleFiltre(key: string) {
    if (this.trie_actif.includes(key)) {
      this.trie_actif = this.trie_actif.filter(f => f !== key);
    } else {
      this.trie_actif.push(key);
    }
  }

  suivant() {
    if (this.pageActuelle < this.pageMax) {
      this.pageActuelle++;
      this.pageChange.emit(this.pageActuelle);
    }
  }

  precedent() {
    if (this.pageActuelle > 1) {
      this.pageActuelle--;
      this.pageChange.emit(this.pageActuelle);
    }
  }



  toString(values: T): string[] {
    return Object.values(values); 
  }
}
