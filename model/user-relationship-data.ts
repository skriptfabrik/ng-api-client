/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.1.0+914aca3
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UserRelationshipData { 
    /**
     * Resource identifier
     */
    readonly id: string;
    /**
     * Resource type
     */
    readonly type: UserRelationshipData.TypeEnum;
}
export namespace UserRelationshipData {
    export type TypeEnum = 'User';
    export const TypeEnum = {
        User: 'User' as TypeEnum
    };
}


