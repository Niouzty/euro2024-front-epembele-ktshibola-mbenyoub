export interface Temps {
    id : {
        value: number,
        url: string
    },
    minute: number;
}


export interface TempsBD extends Omit<Temps, 'id'> {
  id_temps: number;
}
  