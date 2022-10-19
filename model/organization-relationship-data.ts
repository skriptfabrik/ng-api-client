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


export interface OrganizationRelationshipData { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: OrganizationRelationshipData.TypeEnum;
}
export namespace OrganizationRelationshipData {
    export type TypeEnum = 'Organization';
    export const TypeEnum = {
        Organization: 'Organization' as TypeEnum
    };
}


