export interface Resultat {

    id : {
      value: number,
      url: string
    },
    buts_equipe1_temps_reglementaire: number;
    buts_equipe2_temps_reglementaire: number;
    prolongation: boolean;
    tirs_au_but: boolean;
    buts_equipe1_apres_prolongation: number;
    buts_equipe2_apres_prolongation: number;
    score_equipe1: number;
    score_equipe2: number;
  }
  

export interface ResultatBD extends Omit<Resultat, 'id'> {
  id_resultat: number;
}
  