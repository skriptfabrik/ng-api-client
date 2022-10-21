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
import { MocoSettingsUpdateRequestRelationships } from './moco-settings-update-request-relationships';
import { MocoSettingsAttributes } from './moco-settings-attributes';


export interface MocoSettingsUpdateRequestData { 
    /**
     * Resource type
     */
    readonly type: MocoSettingsUpdateRequestData.TypeEnum;
    attributes: MocoSettingsAttributes;
    relationships: MocoSettingsUpdateRequestRelationships;
}
export namespace MocoSettingsUpdateRequestData {
    export type TypeEnum = 'MocoSettings';
    export const TypeEnum = {
        MocoSettings: 'MocoSettings' as TypeEnum
    };
}


