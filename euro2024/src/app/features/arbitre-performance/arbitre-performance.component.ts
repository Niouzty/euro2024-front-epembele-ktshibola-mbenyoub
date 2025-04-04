import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ArbitreService } from '../../core/services/arbitre.service';
import { ArbitreWithResult } from '../../models/arbitrewithresult.model';



@Component({
  selector: 'app-arbitre-performance',
  imports: [HttpClientModule],
  providers: [ArbitreService],
  templateUrl: './arbitre-performance.component.html',
  styleUrl: './arbitre-performance.component.scss'
})
export class ArbitrePerformanceComponent {
  arbitre: any
  isLoading = false;
  errorMessage = '';

  constructor(private arbitreService: ArbitreService){}

  getAllResult(id_arbitre: number): void{
    this.isLoading = true;

    this.arbitreService.get_all_result(id_arbitre).subscribe({
      next: (data) => {
        this.arbitre = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des statistiques';
        this.isLoading = false;
        console.error(err);
      }
    });

  }

}
