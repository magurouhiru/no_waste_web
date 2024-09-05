import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'no_waste_web';
}
