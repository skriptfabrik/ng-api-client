# @skriptfabrik/ng-api-client@1.0.0

    skriptfabrik API Client for Angular

## Author

skriptfabrik <[info@skriptfabrik.com](mailto:info@skriptfabrik.com)>

For more information, please visit [https://www.skriptfabrik.com/api](https://www.skriptfabrik.com/api).

## Installation

### Requirements

- Angular 14 and later
- RxJS 7

### NPM

[Install NPM](https://docs.npmjs.com/cli/configuring-npm/install)

```bash
npm install @skriptfabrik/ng-api-client@1.0.0 --save
```

## Usage

Please follow the [installation instructions](#installation) and then add one of the following variants to your project:

### With default configuration

```typescript
import { ApiModule } from '@skriptfabrik/ng-api-client';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ApiModule,
        // make sure to import the HttpClientModule in the AppModule only,
        // see https://github.com/angular/angular/issues/20575
        HttpClientModule,
    ],
    declarations: [ AppComponent ],
    providers: [ ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
```

### With custom configuration

```typescript
import { ApiModule, Configuration, ConfigurationParameters } from '@skriptfabrik/ng-api-client';

export function apiConfigFactory (): Configuration {
    const params: ConfigurationParameters = {
        // set configuration parameters here.
    };
    return new Configuration(params);
};

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [ ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
```

#### With custom path parameter encoding

Without further customization, only
[path-parameters](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameter-locations) of
[style](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values) `simple` and Dates for
format `date-time` are encoded correctly.

Other styles (e.g. `matrix`) are not that easy to encode and thus are best delegated to other libraries
(e.g.: [@honoluluhenk/http-param-expander](https://www.npmjs.com/package/@honoluluhenk/http-param-expander)).

To implement your own parameter encoding (or call another library), pass an arrow-function or method-reference to the
`encodeParam` property of the `Configuration`-object (see [General Usage](#usage) above).

Example value for use in your `Configuration`-provider:

```typescript
import { ApiModule, Configuration, ConfigurationParameters, Param } from '@skriptfabrik/ng-api-client';
import { FormParamExpander, LabelParamExpander, MatrixParamExpander, SimpleParamExpander } from '@honoluluhenk/http-param-expander';

const formExpander = new FormParamExpander();
const labelExpander = new LabelParamExpander();
const matrixExpander = new MatrixParamExpander();
const simpleExpander = new SimpleParamExpander();

export function apiConfigFactory (): Configuration {
    const params: ConfigurationParameters = {
        encodeParam: (param: Param) => {
            const value = param.dataFormat === 'date-time'
                ? (param.value as Date).toISOString()
                : param.value;

            switch (param.style) {
                case 'matrix':
                    return matrixExpander.expand(value);
                case 'label':
                    return labelExpander.expand(value);
                case 'form':
                    return formExpander.expand(value);
                case 'simple':
                    return simpleExpander.expand(value);
            }

            return encodeURIComponent(String(value));
        },
    };
    return new Configuration(params);
};

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [ ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
```

### With authentication service that manages your access tokens

```typescript
import { ApiModule, Configuration } from '@skriptfabrik/ng-api-client';

@NgModule({
    imports: [ ApiModule ],
    declarations: [ AppComponent ],
    providers: [
        {
            provide: Configuration,
            useFactory: (authService: AuthService) => new Configuration(
                {
                    basePath: environment.apiUrl,
                    accessToken: authService.createAccessToken.bind(authService),
                }
            ),
            deps: [ AuthService ],
            multi: false,
        },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
```

### With custom service base path

If different from the generated base path, during app bootstrap, you can provide the base path to your service.

```typescript
import { BASE_PATH } from '@skriptfabrik/ng-api-client';

@NgModule({
    imports: [ ],
    declarations: [ AppComponent ],
    providers: [
        {
            provide: BASE_PATH,
            useValue: 'http://localhost:8080',
        },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
```

#### Using @angular/cli

First extend your `src/environments/*.ts` files by adding the corresponding base path:

```typescript
export const environment = {
    production: false,
    API_BASE_PATH: 'http://localhost:8080',
};
```

In the `src/app/app.module.ts`:

```typescript
import { BASE_PATH } from '@skriptfabrik/ng-api-client';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ ],
    providers: [
        {
            provide: BASE_PATH,
            useValue: environment.API_BASE_PATH,
        },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
```

### With multiple ApiModules

The `ApiModule` is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

In order to use multiple `ApiModules` generated from different OpenAPI files,
you can create an alias name when importing the modules in order to avoid naming conflicts:

```typescript
import { ApiModule } from '@skriptfabrik/ng-api-client';
import { ApiModule as OtherApiModule } from 'other-api-package';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ApiModule,
        OtherApiModule,
        // make sure to import the HttpClientModule in the AppModule only,
        // see https://github.com/angular/angular/issues/20575
        HttpClientModule,
    ]
})
export class AppModule { }
```

## Credits

This Angular package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0+65bfafc`
- Package version: `1.0.0`
- Build date: `2022-10-18T12:16:04.488761Z[Etc/UTC]`
