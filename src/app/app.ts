import { Component, DOCUMENT, Inject } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioConfigService } from './services/portfolio-config.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { class: 'layout-host' }
})
export class App {
  protected title = 'Gabriel Murillo Portfolio';
  constructor(@Inject(DOCUMENT) private readonly document: Document,
    public readonly portfolioConfig: PortfolioConfigService) { }


  get name() {
    return this.portfolioConfig.data?.name;
  }

  get shortName() {
    return this.portfolioConfig.data?.shortName;
  }

  get position() {
    return this.portfolioConfig.data?.position;
  }

}
