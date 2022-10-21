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
import { MocoSettingsCreateRequestRelationships } from './moco-settings-create-request-relationships';
import { MocoSettingsAttributes } from './moco-settings-attributes';


export interface MocoSettingsCreateRequestData { 
    /**
     * Resource type
     */
    readonly type: MocoSettingsCreateRequestData.TypeEnum;
    attributes: MocoSettingsAttributes;
    relationships: MocoSettingsCreateRequestRelationships;
}
export namespace MocoSettingsCreateRequestData {
    export type TypeEnum = 'MocoSettings';
    export const TypeEnum = {
        MocoSettings: 'MocoSettings' as TypeEnum
    };
}


