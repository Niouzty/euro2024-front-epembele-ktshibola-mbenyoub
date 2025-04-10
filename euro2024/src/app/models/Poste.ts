export interface Poste {
    id: {
        value: number,
        url: string
    },
    nom: string;
  }

  
export interface PosteBD extends Omit<Poste, 'id'> {
    id_poste: number;
  }