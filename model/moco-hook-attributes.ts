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


/**
 * The MOCO Hook Attributes.
 */
export interface MocoHookAttributes { 
    /**
     * MOCO hook identifier
     */
    readonly _id?: string;
    /**
     * Clockify hook status
     */
    status: MocoHookAttributes.StatusEnum;
    /**
     * Clockify signature
     */
    signatureKey: string;
    event: MocoHookAttributes.EventEnum;
    target: MocoHookAttributes.TargetEnum;
}
export namespace MocoHookAttributes {
    export type StatusEnum = 'ENABLED' | 'DISABLED';
    export const StatusEnum = {
        Enabled: 'ENABLED' as StatusEnum,
        Disabled: 'DISABLED' as StatusEnum
    };
    export type EventEnum = 'CREATED' | 'UPDATED' | 'DELETED' | 'ARCHIVED';
    export const EventEnum = {
        Created: 'CREATED' as EventEnum,
        Updated: 'UPDATED' as EventEnum,
        Deleted: 'DELETED' as EventEnum,
        Archived: 'ARCHIVED' as EventEnum
    };
    export type TargetEnum = 'COMPANY' | 'PROJECT' | 'TASK' | 'USER';
    export const TargetEnum = {
        Company: 'COMPANY' as TargetEnum,
        Project: 'PROJECT' as TargetEnum,
        Task: 'TASK' as TargetEnum,
        User: 'USER' as TargetEnum
    };
}


