/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 2.0.0+0fee254
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrganizationResource } from './organization-resource';
import { MocoHookCollectionResponseMeta } from './moco-hook-collection-response-meta';
import { MocoHookCollectionResponseLinks } from './moco-hook-collection-response-links';
import { MocoHookResource } from './moco-hook-resource';


export interface MocoHookCollectionResponse { 
    links: MocoHookCollectionResponseLinks;
    meta: MocoHookCollectionResponseMeta;
    data: Set<MocoHookResource>;
    included?: Set<OrganizationResource>;
}

