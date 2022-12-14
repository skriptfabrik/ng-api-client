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
import { ClockifyWebhookRequestTimeInterval } from './clockify-webhook-request-time-interval';
import { ClockifyWebhookRequestTag } from './clockify-webhook-request-tag';
import { ClockifyWebhookRequestUser } from './clockify-webhook-request-user';
import { ClockifyWebhookRequestProject } from './clockify-webhook-request-project';
import { ClockifyWebhookRequestTask } from './clockify-webhook-request-task';


export interface ClockifyWebhookRequest { 
    id: string;
    description: string;
    timeInterval: ClockifyWebhookRequestTimeInterval;
    tags: Array<ClockifyWebhookRequestTag>;
    project?: ClockifyWebhookRequestProject;
    task?: ClockifyWebhookRequestTask;
    user: ClockifyWebhookRequestUser;
}

