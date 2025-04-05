import { Column } from "./Columns";

export class Table{
    columns!: Column[];

    constructor(listColumn: Column[])
    {
        this.columns = listColumn;
    }


    public getNom()
    {
        return this.columns.map(c => c.nom);
    }

    
}