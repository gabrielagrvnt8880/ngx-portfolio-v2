import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PortfolioConfigService } from './services/portfolio-config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: APP_INITIALIZER,
      useFactory: (configService: PortfolioConfigService) => () => configService.loadConfig(),
      deps: [PortfolioConfigService],
      multi: true
    }
  ]
};
