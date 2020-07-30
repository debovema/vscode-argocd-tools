/**
 * Consolidate Services
 * Description of all APIs
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1alpha1HealthStatus } from './v1alpha1HealthStatus';
import { V1alpha1InfoItem } from './v1alpha1InfoItem';
import { V1alpha1ResourceNetworkingInfo } from './v1alpha1ResourceNetworkingInfo';
import { V1alpha1ResourceRef } from './v1alpha1ResourceRef';

export class V1alpha1ResourceNode {
    'health'?: V1alpha1HealthStatus;
    'images'?: Array<string>;
    'info'?: Array<V1alpha1InfoItem>;
    'networkingInfo'?: V1alpha1ResourceNetworkingInfo;
    'parentRefs'?: Array<V1alpha1ResourceRef>;
    'resourceRef'?: V1alpha1ResourceRef;
    'resourceVersion'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "health",
            "baseName": "health",
            "type": "V1alpha1HealthStatus"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "Array<V1alpha1InfoItem>"
        },
        {
            "name": "networkingInfo",
            "baseName": "networkingInfo",
            "type": "V1alpha1ResourceNetworkingInfo"
        },
        {
            "name": "parentRefs",
            "baseName": "parentRefs",
            "type": "Array<V1alpha1ResourceRef>"
        },
        {
            "name": "resourceRef",
            "baseName": "resourceRef",
            "type": "V1alpha1ResourceRef"
        },
        {
            "name": "resourceVersion",
            "baseName": "resourceVersion",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ResourceNode.attributeTypeMap;
    }
}

