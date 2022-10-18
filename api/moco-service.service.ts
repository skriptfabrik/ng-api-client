/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.0.0+65bfafc
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { CreateMocoService200Response } from '../model/create-moco-service200-response';
// @ts-ignore
import { CreateMocoServiceRequest } from '../model/create-moco-service-request';
// @ts-ignore
import { GetMocoService200Response } from '../model/get-moco-service200-response';
// @ts-ignore
import { GetMocoServiceCollection200Response } from '../model/get-moco-service-collection200-response';
// @ts-ignore
import { JSONAPIError } from '../model/jsonapi-error';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface CreateMocoServiceRequestParams {
    /** Create MOCO Service Request */
    createMocoServiceRequest?: CreateMocoServiceRequest;
}

export interface DeleteMocoServiceRequestParams {
    mocoServiceId: string;
}

export interface GetMocoServiceRequestParams {
    mocoServiceId: string;
    /** The Included Query Parameter. */
    included?: string;
}

export interface GetMocoServiceCollectionRequestParams {
    /** The Limit Query Parameter.  */
    limit?: number;
    /** The Page Query Parameter.  */
    page?: number;
    /** The Included Query Parameter. */
    included?: string;
}

export interface UpdateMocoServiceRequestParams {
    mocoServiceId: string;
    /** Update MOCO Service Request */
    createMocoServiceRequest?: CreateMocoServiceRequest;
}


@Injectable({
  providedIn: 'root'
})
export class MOCOServiceService {

    protected basePath = 'https://www.skriptfabrik.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Create MOCO Service
     * Creates a [MOCO Service Resource](/schemas/MocoServiceResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createMocoService(requestParameters: CreateMocoServiceRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<CreateMocoService200Response>;
    public createMocoService(requestParameters: CreateMocoServiceRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<CreateMocoService200Response>>;
    public createMocoService(requestParameters: CreateMocoServiceRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<CreateMocoService200Response>>;
    public createMocoService(requestParameters: CreateMocoServiceRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const createMocoServiceRequest = requestParameters.createMocoServiceRequest;

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/vnd.api+json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/vnd.api+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/admin/moco_services`;
        return this.httpClient.request<CreateMocoService200Response>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createMocoServiceRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete MOCO Service
     * Deletes a [MOCO Service Resource](/schemas/MocoServiceResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteMocoService(requestParameters: DeleteMocoServiceRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any>;
    public deleteMocoService(requestParameters: DeleteMocoServiceRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<any>>;
    public deleteMocoService(requestParameters: DeleteMocoServiceRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<any>>;
    public deleteMocoService(requestParameters: DeleteMocoServiceRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const mocoServiceId = requestParameters.mocoServiceId;
        if (mocoServiceId === null || mocoServiceId === undefined) {
            throw new Error('Required parameter mocoServiceId was null or undefined when calling deleteMocoService.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/vnd.api+json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/admin/moco_services/${this.configuration.encodeParam({name: "mocoServiceId", value: mocoServiceId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve MOCO Service
     * Retrieves a [MOCO Service Resource](/schemas/MocoServiceResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMocoService(requestParameters: GetMocoServiceRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<GetMocoService200Response>;
    public getMocoService(requestParameters: GetMocoServiceRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<GetMocoService200Response>>;
    public getMocoService(requestParameters: GetMocoServiceRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<GetMocoService200Response>>;
    public getMocoService(requestParameters: GetMocoServiceRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const mocoServiceId = requestParameters.mocoServiceId;
        if (mocoServiceId === null || mocoServiceId === undefined) {
            throw new Error('Required parameter mocoServiceId was null or undefined when calling getMocoService.');
        }
        const included = requestParameters.included;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (included !== undefined && included !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>included, 'included');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/vnd.api+json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/admin/moco_services/${this.configuration.encodeParam({name: "mocoServiceId", value: mocoServiceId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<GetMocoService200Response>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve MOCO Service Collection
     * Retrieves the [MOCO Service Resource](/schemas/MocoServiceResource) collection.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMocoServiceCollection(requestParameters: GetMocoServiceCollectionRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<GetMocoServiceCollection200Response>;
    public getMocoServiceCollection(requestParameters: GetMocoServiceCollectionRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<GetMocoServiceCollection200Response>>;
    public getMocoServiceCollection(requestParameters: GetMocoServiceCollectionRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<GetMocoServiceCollection200Response>>;
    public getMocoServiceCollection(requestParameters: GetMocoServiceCollectionRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const limit = requestParameters.limit;
        const page = requestParameters.page;
        const included = requestParameters.included;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (page !== undefined && page !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>page, 'page');
        }
        if (included !== undefined && included !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>included, 'included');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/vnd.api+json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/admin/moco_services`;
        return this.httpClient.request<GetMocoServiceCollection200Response>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update MOCO Service
     * Updates a [MOCO Service Resource](/schemas/MocoServiceResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateMocoService(requestParameters: UpdateMocoServiceRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any>;
    public updateMocoService(requestParameters: UpdateMocoServiceRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<any>>;
    public updateMocoService(requestParameters: UpdateMocoServiceRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<any>>;
    public updateMocoService(requestParameters: UpdateMocoServiceRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const mocoServiceId = requestParameters.mocoServiceId;
        if (mocoServiceId === null || mocoServiceId === undefined) {
            throw new Error('Required parameter mocoServiceId was null or undefined when calling updateMocoService.');
        }
        const createMocoServiceRequest = requestParameters.createMocoServiceRequest;

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/vnd.api+json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/vnd.api+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/admin/moco_services/${this.configuration.encodeParam({name: "mocoServiceId", value: mocoServiceId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<any>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createMocoServiceRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}