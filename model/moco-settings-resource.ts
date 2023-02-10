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
import { MocoSettingsRelationships } from './moco-settings-relationships';
import { MocoSettingsAttributes } from './moco-settings-attributes';


/**
 * The MOCO Settings Resource.
 */
export interface MocoSettingsResource { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: MocoSettingsResource.TypeEnum;
    attributes: MocoSettingsAttributes;
    relationships: MocoSettingsRelationships;
}
export namespace MocoSettingsResource {
    export type TypeEnum = 'MocoSettings';
    export const TypeEnum = {
        MocoSettings: 'MocoSettings' as TypeEnum
    };
}


