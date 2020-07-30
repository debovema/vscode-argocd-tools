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
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1alpha1ApplicationSpec } from './v1alpha1ApplicationSpec';
import { V1alpha1ApplicationStatus } from './v1alpha1ApplicationStatus';
import { V1alpha1Operation } from './v1alpha1Operation';

export class V1alpha1Application {
    'metadata'?: V1ObjectMeta;
    'operation'?: V1alpha1Operation;
    'spec'?: V1alpha1ApplicationSpec;
    'status'?: V1alpha1ApplicationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "V1alpha1Operation"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1ApplicationSpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1ApplicationStatus"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1Application.attributeTypeMap;
    }
}

