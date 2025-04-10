import { IService } from "../core/services/Iservice";
import { Table } from "../models/Table";

export abstract class  PageGestionData<E, T extends Record<string, any> & { id: { value: number | string, url: string } }>   {
  titre: string = "";
  objets!: T[];
  nombreObjetTotal: number = 0;
  schema!: Table;
  pageActuelle: number = 1;
  service!: IService<E>;

  trieActif: number = -1;
  filtreActif: number[] = [];

  constructor(titre: string, service: IService<E>) {
    this.titre = titre;
    this.service = service;
  }

  init(schema: Table)
  {
    this.schema = schema;
    this.actualiser();
  }

  
  actualiser(): void {
    this.service.countRow().subscribe({
      next: (nombre) => {
        this.nombreObjetTotal = nombre;
      }
    });

    this.chargementPage(this.pageActuelle);
  }

  chargementPage(page: number): void {
    this.pageActuelle = page;
    this.service.getAll(page, 10,this.trieActif,this.filtreActif).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.objets = response.map(this.convertData);
        } else {
          this.objets = [];
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des objets :', err);
      }
    });
  }

  get pageMax(): number {
    return Math.ceil(this.nombreObjetTotal / 10);
  }

  changeValue(data: { column: string; id: number | string; newValue: number | string }) {
    const index = this.objets.findIndex((obj) => obj.id.value == data.id);
    if (index === -1) {
      return;
    }
  
    const oldObject = this.objets[index];
    const newObject = { ...oldObject, [data.column]: data.newValue };
    const confirmationMessage = `Êtes-vous sûr de vouloir modifier la valeur suivante ?\n\nAvant : ${JSON.stringify(oldObject, null, 2)}\n\nAprès : ${JSON.stringify(newObject, null, 2)}`;
    const valid = window.confirm(confirmationMessage);
  
    if (valid) {
      this.service.update(data.column, +data.id, data.newValue).subscribe({
        next: (res) => {
          if (res) {
            this.objets.splice(index, 1, newObject);
            alert('Mise à jour réussie !');
          }
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour :', err);
          alert('Erreur lors de la mise à jour');
        }
      });
    } else {
      alert('Modification annulée');
    }
  }
  

  onInsert(data: E[]) {
    console.log(data);
    this.service.insert(data).subscribe({
      next: (res) => {
        if (res) {
          this.chargementPage(this.pageActuelle);
        }
      },
      error: (err) => {
        console.error('Erreur lors de l\'insertion :', err);
      }
    });
  }

  deleteRow(id: number | string): void {

    const valid = window.confirm('Ëtes vous sur de vouloir supprimer ?')

    if (valid)
    {
      this.service.delete(+id).subscribe({
        next: (success) => {
          if (success) {
            this.chargementPage(this.pageActuelle); 
            alert('Suppression réussie !');
          } else {
            alert('Erreur lors de la suppression');
          }
        },
        error: (error) => {
          alert('Une erreur est survenue lors de la communication avec le serveur : ' + error);
        }
      });
    }
  }

    

  toggleFiltre(codeFiltre: number): void {
    if (this.filtreActif.includes(codeFiltre)) {
      this.filtreActif = this.filtreActif.filter(code => code !== codeFiltre);
    } else {
      this.filtreActif.push(codeFiltre);
    }

    this.actualiser();

  }

  toggleTrie(codeTrie: number): void {
    if (this.trieActif !== codeTrie) {
      this.trieActif = codeTrie;
    } else {
      this.trieActif = -1;
    }

    this.actualiser();

  }

  abstract convertData(data: E): T;
  abstract get trie(): Record<string, number>;
  abstract get filtre(): Record<string, number>;
}
