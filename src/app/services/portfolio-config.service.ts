import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PortfolioConfigService {
  private config: Record<string, unknown> | null = null;

  async loadConfig(): Promise<void> {
    const res = await fetch('/assets/portfolio.config.json');
    if (!res.ok) throw new Error('Failed to load config');
    this.config = await res.json();
  }

  get data(): Record<string, unknown> | null {
    return this.config;
  }
}
