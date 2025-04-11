export interface Temps {
    id : {
        value: number,
        url: string
    },
    date_heure_match: Date;
}


export interface TempsBD extends Omit<Temps, 'id'> {
  id_temps: number;
}
  