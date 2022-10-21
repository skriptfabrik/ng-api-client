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
import { MocoServiceCollectionResponseMeta } from './moco-service-collection-response-meta';
import { MocoServiceCollectionResponseLinks } from './moco-service-collection-response-links';
import { MocoServiceResource } from './moco-service-resource';
import { MocoServiceCollectionResponseIncludedInner } from './moco-service-collection-response-included-inner';


export interface MocoServiceCollectionResponse { 
    links: MocoServiceCollectionResponseLinks;
    meta: MocoServiceCollectionResponseMeta;
    data: Set<MocoServiceResource>;
    included?: Set<MocoServiceCollectionResponseIncludedInner>;
}

