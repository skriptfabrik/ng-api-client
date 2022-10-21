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


export interface JsonApiErrorItemSource { 
    /**
     * a JSON Pointer [RFC6901] to  the asspcoiated entity in the request document [e.g. \"/data\" for a primary data object, or \"/data/attributes/title\" for a specific attribute].
     */
    pointer?: string;
    /**
     * A string indicating which query parameter caused the error.
     */
    parameter?: string;
}

