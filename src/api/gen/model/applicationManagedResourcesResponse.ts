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
import { V1alpha1ResourceDiff } from './v1alpha1ResourceDiff';

export class ApplicationManagedResourcesResponse {
    'items'?: Array<V1alpha1ResourceDiff>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1alpha1ResourceDiff>"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationManagedResourcesResponse.attributeTypeMap;
    }
}

