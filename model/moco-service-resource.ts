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
import { MOCOServiceResourceRelationships } from './moco-service-resource-relationships';
import { MOCOServiceAttributes } from './moco-service-attributes';


/**
 * The MOCO Service Resource.
 */
export interface MocoServiceResource { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: MocoServiceResource.TypeEnum;
    attributes: MOCOServiceAttributes;
    relationships: MOCOServiceResourceRelationships;
}
export namespace MocoServiceResource {
    export type TypeEnum = 'MocoService';
    export const TypeEnum = {
        MocoService: 'MocoService' as TypeEnum
    };
}


