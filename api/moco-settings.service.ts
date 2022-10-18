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
import { CreateMocoSettings200Response } from '../model/create-moco-settings200-response';
// @ts-ignore
import { CreateMocoSettingsRequest } from '../model/create-moco-settings-request';
// @ts-ignore
import { GetMocoSettings200Response } from '../model/get-moco-settings200-response';
// @ts-ignore
import { GetMocoSettingsCollection200Response } from '../model/get-moco-settings-collection200-response';
// @ts-ignore
import { JSONAPIError } from '../model/jsonapi-error';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface CreateMocoSettingsRequestParams {
    /** Create MOCO Settings Request */
    createMocoSettingsRequest?: CreateMocoSettingsRequest;
}

export interface DeleteMocoSettingsRequestParams {
    mocoSettingsId: string;
}

export interface GetMocoSettingsRequestParams {
    mocoSettingsId: string;
    /** The Included Query Parameter. */
    included?: string;
}

export interface GetMocoSettingsCollectionRequestParams {
    /** The Limit Query Parameter.  */
    limit?: number;
    /** The Page Query Parameter.  */
    page?: number;
    /** The Included Query Parameter. */
    included?: string;
}

export interface UpdateMocoSettingsRequestParams {
    mocoSettingsId: string;
    /** Update MOCO Settings Request */
    createMocoSettingsRequest?: CreateMocoSettingsRequest;
}


@Injectable({
  providedIn: 'root'
})
export class MOCOSettingsService {

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
     * Create MOCO Setting
     * Creates a [MOCO Settings Resource](/schemas/MocoSettingsResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createMocoSettings(requestParameters: CreateMocoSettingsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<CreateMocoSettings200Response>;
    public createMocoSettings(requestParameters: CreateMocoSettingsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<CreateMocoSettings200Response>>;
    public createMocoSettings(requestParameters: CreateMocoSettingsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<CreateMocoSettings200Response>>;
    public createMocoSettings(requestParameters: CreateMocoSettingsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const createMocoSettingsRequest = requestParameters.createMocoSettingsRequest;

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

        let localVarPath = `/api/admin/moco_settings`;
        return this.httpClient.request<CreateMocoSettings200Response>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createMocoSettingsRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete MOCO Setting
     * Deletes a [MOCO Settings Resource](/schemas/MocoSettingsResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteMocoSettings(requestParameters: DeleteMocoSettingsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any>;
    public deleteMocoSettings(requestParameters: DeleteMocoSettingsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<any>>;
    public deleteMocoSettings(requestParameters: DeleteMocoSettingsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<any>>;
    public deleteMocoSettings(requestParameters: DeleteMocoSettingsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const mocoSettingsId = requestParameters.mocoSettingsId;
        if (mocoSettingsId === null || mocoSettingsId === undefined) {
            throw new Error('Required parameter mocoSettingsId was null or undefined when calling deleteMocoSettings.');
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

        let localVarPath = `/api/admin/moco_settings/${this.configuration.encodeParam({name: "mocoSettingsId", value: mocoSettingsId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
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
     * Retrieve MOCO Setting
     * Retrieves a [MOCO Settings Resource](/schemas/MocoSettingsResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMocoSettings(requestParameters: GetMocoSettingsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<GetMocoSettings200Response>;
    public getMocoSettings(requestParameters: GetMocoSettingsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<GetMocoSettings200Response>>;
    public getMocoSettings(requestParameters: GetMocoSettingsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<GetMocoSettings200Response>>;
    public getMocoSettings(requestParameters: GetMocoSettingsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const mocoSettingsId = requestParameters.mocoSettingsId;
        if (mocoSettingsId === null || mocoSettingsId === undefined) {
            throw new Error('Required parameter mocoSettingsId was null or undefined when calling getMocoSettings.');
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

        let localVarPath = `/api/admin/moco_settings/${this.configuration.encodeParam({name: "mocoSettingsId", value: mocoSettingsId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<GetMocoSettings200Response>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Retrieve MOCO Settings Collection
     * Retrieves the [MOCO Settings Resource](/schemas/MocoSettingsResource) collection.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMocoSettingsCollection(requestParameters: GetMocoSettingsCollectionRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<GetMocoSettingsCollection200Response>;
    public getMocoSettingsCollection(requestParameters: GetMocoSettingsCollectionRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<GetMocoSettingsCollection200Response>>;
    public getMocoSettingsCollection(requestParameters: GetMocoSettingsCollectionRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<GetMocoSettingsCollection200Response>>;
    public getMocoSettingsCollection(requestParameters: GetMocoSettingsCollectionRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
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

        let localVarPath = `/api/admin/moco_settings`;
        return this.httpClient.request<GetMocoSettingsCollection200Response>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Update MOCO Setting
     * Updates a [MOCO Settings Resource](/schemas/MocoSettingsResource).
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateMocoSettings(requestParameters: UpdateMocoSettingsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any>;
    public updateMocoSettings(requestParameters: UpdateMocoSettingsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpResponse<any>>;
    public updateMocoSettings(requestParameters: UpdateMocoSettingsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<HttpEvent<any>>;
    public updateMocoSettings(requestParameters: UpdateMocoSettingsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/vnd.api+json', context?: HttpContext}): Observable<any> {
        const mocoSettingsId = requestParameters.mocoSettingsId;
        if (mocoSettingsId === null || mocoSettingsId === undefined) {
            throw new Error('Required parameter mocoSettingsId was null or undefined when calling updateMocoSettings.');
        }
        const createMocoSettingsRequest = requestParameters.createMocoSettingsRequest;

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

        let localVarPath = `/api/admin/moco_settings/${this.configuration.encodeParam({name: "mocoSettingsId", value: mocoSettingsId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<any>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createMocoSettingsRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}