export interface Nationalite {
    id: {
        value: number,
        url: string
    },
    nom: string
}


export interface NationaliteBD extends Omit<Nationalite,'id'>{
    id_nationalite: number
}