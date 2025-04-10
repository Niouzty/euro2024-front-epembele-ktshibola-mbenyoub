export interface Arbitre{
    id : {
        value: number,
        url: string
    },
    nom: string
    prenom: string
    id_nationalite: number
}

export interface ArbitreBD extends Omit<Arbitre,'id'>{
    id_arbitre: number;
}
    
