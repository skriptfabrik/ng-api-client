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
import { GetClockifyHookCollection200ResponseIncludedInner } from './get-clockify-hook-collection200-response-included-inner';
import { ClockifyHookResource } from './clockify-hook-resource';


export interface GetClockifyHook204Response { 
    data: ClockifyHookResource;
    included?: Set<GetClockifyHookCollection200ResponseIncludedInner>;
}
