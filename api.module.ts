import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AdminService } from './api/admin.service';
import { AuthorizationService } from './api/authorization.service';
import { ClockifyHookService } from './api/clockify-hook.service';
import { ClockifyServiceService } from './api/clockify-service.service';
import { ClockifySettingsService } from './api/clockify-settings.service';
import { ClockifyUserService } from './api/clockify-user.service';
import { MOCOHookService } from './api/moco-hook.service';
import { MOCOServiceService } from './api/moco-service.service';
import { MOCOSettingsService } from './api/moco-settings.service';
import { OrganizationService } from './api/organization.service';
import { UserService } from './api/user.service';
import { WebhooksService } from './api/webhooks.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
