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
import { MocoServiceAttributes } from './moco-service-attributes';
import { MocoServiceCreateRequestRelationships } from './moco-service-create-request-relationships';


export interface MocoServiceCreateRequestData { 
    /**
     * Resource type
     */
    readonly type: MocoServiceCreateRequestData.TypeEnum;
    attributes: MocoServiceAttributes;
    relationships: MocoServiceCreateRequestRelationships;
}
export namespace MocoServiceCreateRequestData {
    export type TypeEnum = 'MocoService';
    export const TypeEnum = {
        MocoService: 'MocoService' as TypeEnum
    };
}

