/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.1.1+134fc7b
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ClockifySettingsAttributes } from './clockify-settings-attributes';
import { ClockifySettingsRelationships } from './clockify-settings-relationships';


/**
 * The Clockify Settings Resource.
 */
export interface ClockifySettingsResource { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: ClockifySettingsResource.TypeEnum;
    attributes: ClockifySettingsAttributes;
    relationships: ClockifySettingsRelationships;
}
export namespace ClockifySettingsResource {
    export type TypeEnum = 'ClockifySettings';
    export const TypeEnum = {
        ClockifySettings: 'ClockifySettings' as TypeEnum
    };
}


