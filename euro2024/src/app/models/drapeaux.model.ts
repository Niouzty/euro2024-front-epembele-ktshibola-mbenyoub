export interface Drapeau {
    id: {
        value: number;
        url: string;
    },
    id_equipe: number;
    chemin_image: string;
  }
  
  
  
export interface DrapeauBD extends Omit<Drapeau, 'id'> {
    id_drapeau: number;
}