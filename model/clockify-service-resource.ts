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
import { ClockifyServiceRelationships } from './clockify-service-relationships';
import { ClockifyServiceAttributes } from './clockify-service-attributes';


/**
 * The Clockify Service Resource.
 */
export interface ClockifyServiceResource { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: ClockifyServiceResource.TypeEnum;
    attributes: ClockifyServiceAttributes;
    relationships: ClockifyServiceRelationships;
}
export namespace ClockifyServiceResource {
    export type TypeEnum = 'ClockifyService';
    export const TypeEnum = {
        ClockifyService: 'ClockifyService' as TypeEnum
    };
}


