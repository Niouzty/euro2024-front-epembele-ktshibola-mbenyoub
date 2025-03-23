import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StadesService } from '../../../Services/stades.service';


@Component({
  selector: 'app-diag-viewer',
  imports: [NgxChartsModule],
  templateUrl: './diag-viewer.component.html',
  styleUrl: './diag-viewer.component.scss'
})
export class DiagViewerComponent implements OnInit {
  
  constructor(private service : StadesService){}
 
  data: { name: string, value: number }[] = [];

  ngOnInit(): void {
    this.service.getAverageVisitorsByStade().subscribe({
      next: (value) => {
        console.log(value);
        
        this.data = value.result.map((item: any) => ({
          name: item.stade,
          value: item.avg_visitor
        }));
        console.log(this.data);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      }
    });
  }


}
