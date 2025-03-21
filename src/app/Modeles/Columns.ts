export class Columns {
    nom: string;
    isPK: boolean;
    isFK: boolean;

    constructor(nom: string, isPK: boolean, isFK: boolean) {
        this.nom = nom;
        this.isPK = isPK;
        this.isFK = isFK;
    }

    createBalise(url: string = ''): string {
        return this.isFK ? this.createBaliseFK(url) : this.createSBalise();
    }

    createBaliseFK(url: string): string {
        const href = url ? ` href='${url}'` : ''; 
        return `<a class='${this.isPK ? "PK" : "FK"}'${href}>@${this.nom}</a>`;
    }

    createSBalise(): string {
        return `<p class='${this.isPK ? "PK" : ""}'>${this.nom}</p>`;
    }
}
