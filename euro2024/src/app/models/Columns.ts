export class Column {
    nom: string;
    isPK: boolean;
    isFK: boolean;

    constructor(nom: string, isPK: boolean, isFK: boolean) {
        this.nom = nom;
        this.isPK = isPK;
        this.isFK = isFK;
    }

    
}
