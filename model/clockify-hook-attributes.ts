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


/**
 * The Clockify Hook Attributes.
 */
export interface ClockifyHookAttributes { 
    /**
     * Clockify hook identifier
     */
    readonly _id?: string;
    /**
     * Clockify hook status
     */
    status: ClockifyHookAttributes.StatusEnum;
    /**
     * Clockify signature
     */
    signature: string;
    event: ClockifyHookAttributes.EventEnum;
}
export namespace ClockifyHookAttributes {
    export type StatusEnum = 'ENABLED' | 'DISABLED';
    export const StatusEnum = {
        Enabled: 'ENABLED' as StatusEnum,
        Disabled: 'DISABLED' as StatusEnum
    };
    export type EventEnum = 'TIME_ENTRY_CREATED' | 'TIME_ENTRY_UPDATED' | 'TIME_ENTRY_DELETED' | 'TIMER_STOPPED';
    export const EventEnum = {
        TimeEntryCreated: 'TIME_ENTRY_CREATED' as EventEnum,
        TimeEntryUpdated: 'TIME_ENTRY_UPDATED' as EventEnum,
        TimeEntryDeleted: 'TIME_ENTRY_DELETED' as EventEnum,
        TimerStopped: 'TIMER_STOPPED' as EventEnum
    };
}


