export interface EquipeCompare {
    equipe1: {
      nom: string;
      nombre_de_matchs: number;
      buts_temps_reglementaire: number;
      buts_apres_prolongation: number;
      buts_tirs_au_but: number;
    };
    equipe2: {
      nom: string;
      nombre_de_matchs: number;
      buts_temps_reglementaire: number;
      buts_apres_prolongation: number;
      buts_tirs_au_but: number;
    };
    comparaison: {
      difference_buts_reglementaire: number;
      difference_buts_prolongation: number;
      difference_tirs_au_but: number;
      difference_matchs_joues: number;
    };
  }