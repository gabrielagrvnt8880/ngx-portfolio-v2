import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PortfolioConfigService {
  private config: any;


  loadConfig(): Promise<void> {
    return fetch('/assets/portfolio.config.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load config');
        return res.json();
      })
      .then(cfg => {
        this.config = cfg;
      });
  }


  get data() {
    return this.config;
  }
}
