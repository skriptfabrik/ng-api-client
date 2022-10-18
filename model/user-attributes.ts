/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.0.0+65bfafc
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The User Attributes.
 */
export interface UserAttributes { 
    /**
     * User identifier
     */
    readonly _id?: string;
    /**
     * Given name
     */
    givenName: string;
    /**
     * Family name
     */
    familyName: string;
    /**
     * Email address
     */
    email: string;
}

