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
import { ClockifyUserUpdateRequestRelationships } from './clockify-user-update-request-relationships';
import { ClockifyUserAttributes } from './clockify-user-attributes';


export interface ClockifyUserUpdateRequestData { 
    /**
     * Resource type
     */
    readonly type: ClockifyUserUpdateRequestData.TypeEnum;
    attributes?: ClockifyUserAttributes;
    relationships: ClockifyUserUpdateRequestRelationships;
}
export namespace ClockifyUserUpdateRequestData {
    export type TypeEnum = 'ClockifyUser';
    export const TypeEnum = {
        ClockifyUser: 'ClockifyUser' as TypeEnum
    };
}


