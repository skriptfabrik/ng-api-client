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
import { MOCOTaskWebhookRequestProject } from './moco-task-webhook-request-project';


/**
 * Task Request Object
 */
export interface MOCOTaskWebhookRequest { 
    id: number;
    name: string;
    project: MOCOTaskWebhookRequestProject;
}

