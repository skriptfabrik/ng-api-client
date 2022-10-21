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
import { MocoSettingsResource } from './moco-settings-resource';
import { OrganizationResource } from './organization-resource';


export interface MocoSettingsResponse { 
    data: MocoSettingsResource;
    included?: Set<OrganizationResource>;
}
