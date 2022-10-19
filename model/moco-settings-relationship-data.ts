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


export interface MocoSettingsRelationshipData { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: MocoSettingsRelationshipData.TypeEnum;
}
export namespace MocoSettingsRelationshipData {
    export type TypeEnum = 'MocoSettings';
    export const TypeEnum = {
        MocoSettings: 'MocoSettings' as TypeEnum
    };
}


