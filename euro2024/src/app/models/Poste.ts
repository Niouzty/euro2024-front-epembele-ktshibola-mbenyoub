export interface Poste {
    id: {
        value: number,
        url: string
    },
    nom_poste: string;
  }

  
export interface PosteBD extends Omit<Poste, 'id'> {
    id_poste: number;
  }