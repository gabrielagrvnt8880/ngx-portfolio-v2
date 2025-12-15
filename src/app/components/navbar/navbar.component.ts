import { Component, input } from "@angular/core";


@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  host: { class: 'layout-host' }
})
export class NavbarComponent {
  name = input<string>();
}