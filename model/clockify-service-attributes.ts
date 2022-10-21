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


/**
 * The Clockify Service Attributes.
 */
export interface ClockifyServiceAttributes { 
    /**
     * Clockify service identifier
     */
    readonly _id?: string;
    /**
     * MOCO service status
     */
    status: ClockifyServiceAttributes.StatusEnum;
    /**
     * MOCO API key
     */
    apiKey: string;
}
export namespace ClockifyServiceAttributes {
    export type StatusEnum = 'ENABLED' | 'DISABLED';
    export const StatusEnum = {
        Enabled: 'ENABLED' as StatusEnum,
        Disabled: 'DISABLED' as StatusEnum
    };
}


