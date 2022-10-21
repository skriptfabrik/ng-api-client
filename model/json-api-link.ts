/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.1.2+e4727fd
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { JsonApiLinkObject } from './json-api-link-object';


/**
 * A link **MUST** be represented as either: * a string containing the URL of the link * or `link object` 
 */
/**
 * @type JsonApiLink
 * A link **MUST** be represented as either: * a string containing the URL of the link * or `link object` 
 * @export
 */
export type JsonApiLink = JsonApiLinkObject | string;
