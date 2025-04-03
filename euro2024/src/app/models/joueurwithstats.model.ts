export interface JoueurWithStats{
    id_joueur: number;
    nom: string;
    prenom: string;
    date_naissance: string;
    num_maillot: number;
    id_equipe: number;
    id_stats_joueur: number;
    buts_marques: number;
    passes_decisives: number;
    cartons_jaunes: number;
    cartons_rouges: number;
    minutes_jouees: number;
}