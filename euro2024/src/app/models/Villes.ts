export interface Ville {
    id: {
        value: number,
        url: string
    },
    nom: string
}


export interface VilleBD extends Omit<Ville,'id'>{
    id_ville: number
}