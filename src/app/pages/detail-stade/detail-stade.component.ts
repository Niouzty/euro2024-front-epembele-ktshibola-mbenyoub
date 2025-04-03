import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stade } from '../../Modeles/Stade';
import { StadesService } from '../../Services/stades.service';
import { Match } from '../../Modeles/Match';
import { TableauDataComponent } from "../../core/composants/tableau-data/tableau-data.component";

@Component({
  selector: 'app-detail-stade',
  templateUrl: './detail-stade.component.html',
  styleUrl: './detail-stade.component.scss',
  imports: [TableauDataComponent]
})
export class DetailStadeComponent implements OnInit {
  id!: number; 
  stade!: Stade;
  trie = [
    {name: "Match passé", code:1},
    {name: "Futur match",code:2}
  ]
  
  rencontres!: Match[];


  get ID(){
    return 1;
  }


  get pageMax() : number{
    return 5;
  }

  

  constructor(private route: ActivatedRoute,private serviceStade: StadesService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.serviceStade.getStade(this.id).subscribe({
      next: (stade) => {
        this.stade = stade;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du stade :', err);
      }
    });
  }




  chargementPage(page: number)
  {
    this.serviceStade.getMatchs(this.id,0)
  }




}