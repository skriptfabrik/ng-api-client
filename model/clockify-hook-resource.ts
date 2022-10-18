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
import { ClockifyHookLinks } from './clockify-hook-links';
import { ClockifyHookAttributes } from './clockify-hook-attributes';
import { ClockifyHookRelationships } from './clockify-hook-relationships';


/**
 * The Clockify Hook Resource.
 */
export interface ClockifyHookResource { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: ClockifyHookResource.TypeEnum;
    attributes: ClockifyHookAttributes;
    links?: ClockifyHookLinks;
    relationships: ClockifyHookRelationships;
}
export namespace ClockifyHookResource {
    export type TypeEnum = 'ClockifyHook';
    export const TypeEnum = {
        ClockifyHook: 'ClockifyHook' as TypeEnum
    };
}


