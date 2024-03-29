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
import { ClockifySettingsAttributes } from './clockify-settings-attributes';
import { ClockifySettingsCreateRequestRelationships } from './clockify-settings-create-request-relationships';


export interface ClockifySettingsCreateRequestData { 
    /**
     * Resource type
     */
    readonly type: ClockifySettingsCreateRequestData.TypeEnum;
    attributes: ClockifySettingsAttributes;
    relationships: ClockifySettingsCreateRequestRelationships;
}
export namespace ClockifySettingsCreateRequestData {
    export type TypeEnum = 'ClockifySettings';
    export const TypeEnum = {
        ClockifySettings: 'ClockifySettings' as TypeEnum
    };
}


