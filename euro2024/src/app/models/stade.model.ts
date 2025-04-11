export type Stade = {
    id: {
        value: number;
        url: string;
    };
    nom: string;
    id_ville: number;
    capacite: number;
};

export interface StadeBD extends Omit<Stade, 'id'> {
    id_stade: number;
}
  