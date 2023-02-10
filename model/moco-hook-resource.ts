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
import { MocoHookRelationships } from './moco-hook-relationships';
import { MocoHookAttributes } from './moco-hook-attributes';
import { MocoHookLinks } from './moco-hook-links';


/**
 * The MOCO Hook Resource.
 */
export interface MocoHookResource { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: MocoHookResource.TypeEnum;
    attributes: MocoHookAttributes;
    links?: MocoHookLinks;
    relationships: MocoHookRelationships;
}
export namespace MocoHookResource {
    export type TypeEnum = 'MocoHook';
    export const TypeEnum = {
        MocoHook: 'MocoHook' as TypeEnum
    };
}


