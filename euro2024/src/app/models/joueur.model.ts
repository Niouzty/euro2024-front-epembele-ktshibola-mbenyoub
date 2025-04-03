export interface Joueur{
    id_joueur: number;
    nom: string;
    prenom: string;
    date_naissance: string; // Ou Date si vous utilisez des objets Date
    id_nationalite: number;
    id_poste: number;
    num_maillot: number;
    id_equipe: number;
    id_stats_joueur?: number; // a modifier 
}