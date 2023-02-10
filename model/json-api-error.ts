/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.1.3+af59792
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { JsonApiServerDescription } from './json-api-server-description';
import { JsonApiErrorItem } from './json-api-error-item';
import { JsonApiLink } from './json-api-link';


/**
 * Error objects provide additional information about problems encountered while performing an operation. Error objects **MUST** be returned as an array keyed by `errors` in the top level of a JSON:API document. 
 */
export interface JsonApiError { 
    errors: Array<JsonApiErrorItem>;
    jsonapi?: JsonApiServerDescription;
    links?: { [key: string]: JsonApiLink; };
}

