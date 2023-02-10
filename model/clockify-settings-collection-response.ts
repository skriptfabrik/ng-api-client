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
import { OrganizationResource } from './organization-resource';
import { ClockifySettingsCollectionResponseMeta } from './clockify-settings-collection-response-meta';
import { ClockifySettingsCollectionResponseLinks } from './clockify-settings-collection-response-links';
import { ClockifySettingsResource } from './clockify-settings-resource';


export interface ClockifySettingsCollectionResponse { 
    links: ClockifySettingsCollectionResponseLinks;
    meta: ClockifySettingsCollectionResponseMeta;
    data: Set<ClockifySettingsResource>;
    included?: Set<OrganizationResource>;
}

