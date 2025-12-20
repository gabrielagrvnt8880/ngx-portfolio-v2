import { Component, DOCUMENT, Inject } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioConfigService } from './services/portfolio-config.service';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experiences/experience.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, AboutComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { class: 'layout-host' }
})
export class App {
  protected title = 'Gabriel Murillo Portfolio';
  constructor(@Inject(DOCUMENT) private readonly document: Document,
    public readonly portfolioConfig: PortfolioConfigService) { }


  get name(): string {
    return this.portfolioConfig.data?.['name'] as string;
  }

  get shortName(): string {
    return this.portfolioConfig.data?.['shortName'] as string;
  }

  get position(): string {
    return this.portfolioConfig.data?.['position'] as string;
  }

}
