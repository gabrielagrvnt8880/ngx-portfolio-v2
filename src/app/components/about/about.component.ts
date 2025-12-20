import { Component } from "@angular/core";


@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  host: { class: 'layout-host' }
})
export class AboutComponent { }