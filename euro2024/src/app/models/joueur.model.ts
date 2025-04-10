export interface Joueur{
    id: {
        value: number;
        url: string;
    };
    nom: string;
    prenom: string;
    date_naissance: string; 
    id_nationalite: number;
    id_poste: number;
    num_maillot: number;
    id_equipe: number;
    id_stats_joueur?: number; 
}


export interface JoueurBD extends Omit<Joueur, 'id'> {
    id_joueur: number;
}
  