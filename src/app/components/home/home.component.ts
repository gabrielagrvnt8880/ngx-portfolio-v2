import { Component, input } from "@angular/core";


@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: { class: 'layout-host' }
})
export class HomeComponent {

  name = input<string>();
  profession = input<string>();

}