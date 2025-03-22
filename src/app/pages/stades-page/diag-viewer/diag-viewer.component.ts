import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-diag-viewer',
  imports: [NgxChartsModule],
  templateUrl: './diag-viewer.component.html',
  styleUrl: './diag-viewer.component.scss'
})
export class DiagViewerComponent {
  data: { name: string, value: number }[] = [{name:"Paris",value:50000},{name:"Lol",value:20000}];

}
