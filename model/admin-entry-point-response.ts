/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.1.0+914aca3
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { JsonApiServerDescription } from './json-api-server-description';
import { AdminEntryPointResponseLinks } from './admin-entry-point-response-links';


export interface AdminEntryPointResponse { 
    meta: object;
    jsonapi: JsonApiServerDescription;
    links: AdminEntryPointResponseLinks;
}

