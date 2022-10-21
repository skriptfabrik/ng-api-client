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
 * Company Request Object
 */
export interface MOCOCompanyWebhookRequest { 
    id: number;
    type: MOCOCompanyWebhookRequest.TypeEnum;
    name: string;
}
export namespace MOCOCompanyWebhookRequest {
    export type TypeEnum = 'customer' | 'supplier' | 'organization';
    export const TypeEnum = {
        Customer: 'customer' as TypeEnum,
        Supplier: 'supplier' as TypeEnum,
        Organization: 'organization' as TypeEnum
    };
}

