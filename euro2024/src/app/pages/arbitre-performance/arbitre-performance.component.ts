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
  arbitresWithResult: ArbitreWithResult[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private arbitreService: ArbitreService){}

  ngOnInit(): void{
    this.getAllResult();
  }
  
  getAllResult(): void{
    this.isLoading = true;

    this.arbitreService.get_all_result().subscribe({
      next: (data) => {
        this.arbitresWithResult = Array.isArray(data) ? data : [data];
        console.log(this.arbitresWithResult);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des statistiques';
        this.isLoading = false;
        console.error(err);
      }
    });

  }
}
