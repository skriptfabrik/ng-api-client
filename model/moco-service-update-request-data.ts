/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 2.1.0+e417cb8
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MocoServiceUpdateRequestRelationships } from './moco-service-update-request-relationships';
import { MocoServiceAttributes } from './moco-service-attributes';


export interface MocoServiceUpdateRequestData { 
    /**
     * Resource type
     */
    readonly type: MocoServiceUpdateRequestData.TypeEnum;
    attributes: MocoServiceAttributes;
    relationships: MocoServiceUpdateRequestRelationships;
}
export namespace MocoServiceUpdateRequestData {
    export type TypeEnum = 'MocoService';
    export const TypeEnum = {
        MocoService: 'MocoService' as TypeEnum
    };
}


