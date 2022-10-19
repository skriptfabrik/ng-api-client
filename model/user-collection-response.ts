/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.1.1+134fc7b
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserCollectionResponseLinks } from './user-collection-response-links';
import { UserCollectionResponseMeta } from './user-collection-response-meta';
import { UserResource } from './user-resource';


export interface UserCollectionResponse { 
    links: UserCollectionResponseLinks;
    meta: UserCollectionResponseMeta;
    data: Set<UserResource>;
}

