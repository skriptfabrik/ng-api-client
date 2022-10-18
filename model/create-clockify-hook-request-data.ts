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
import { ClockifyHookAttributes } from './clockify-hook-attributes';
import { CreateClockifyHookRequestDataRelationships } from './create-clockify-hook-request-data-relationships';


export interface CreateClockifyHookRequestData { 
    /**
     * Resource type
     */
    readonly type: CreateClockifyHookRequestData.TypeEnum;
    attributes: ClockifyHookAttributes;
    relationships: CreateClockifyHookRequestDataRelationships;
}
export namespace CreateClockifyHookRequestData {
    export type TypeEnum = 'ClockifyHook';
    export const TypeEnum = {
        ClockifyHook: 'ClockifyHook' as TypeEnum
    };
}


