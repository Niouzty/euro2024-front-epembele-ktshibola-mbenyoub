export interface Equipe {
    id : {
        value: number,
        url: string
    };
    id_entraineur: number;
    id_equipe: number;
    id_groupe: number;
    nom: string;
}

export interface EquipeBD extends Omit<Equipe,'id'>{
    id_equipe: number;
}
    
