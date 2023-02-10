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
import { MocoHookAttributes } from './moco-hook-attributes';
import { MocoHookCreateRequestRelationships } from './moco-hook-create-request-relationships';


export interface MocoHookCreateRequestData { 
    /**
     * Resource type
     */
    readonly type: MocoHookCreateRequestData.TypeEnum;
    attributes: MocoHookAttributes;
    relationships: MocoHookCreateRequestRelationships;
}
export namespace MocoHookCreateRequestData {
    export type TypeEnum = 'MocoHook';
    export const TypeEnum = {
        MocoHook: 'MocoHook' as TypeEnum
    };
}


