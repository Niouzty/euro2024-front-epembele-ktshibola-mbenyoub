import { Component } from '@angular/core';  
import { RouterOutlet } from '@angular/router';  
import{HeaderComponent} from './shared/components/header/header.component';
import{FooterComponent} from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'euro2024';
}
