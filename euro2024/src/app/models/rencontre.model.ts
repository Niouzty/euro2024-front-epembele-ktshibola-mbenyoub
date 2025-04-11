export interface Rencontre {
    id: {
      value: number;
      url: string;
    };
    id_temps: number;         
    id_stade: number;          
    id_equipe1: number;       
    id_equipe2: number;      
    id_phase: number;         
    id_resultat: number;       
    nb_spectateurs?: number;   
  
  }
  
  export interface RencontreBD extends Omit<Rencontre, 'id'> {
    id_match: number;
  }
  