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

export class V1alpha1KustomizeOptions {
    'binaryPath'?: string;
    'buildOptions'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "binaryPath",
            "baseName": "binaryPath",
            "type": "string"
        },
        {
            "name": "buildOptions",
            "baseName": "buildOptions",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1KustomizeOptions.attributeTypeMap;
    }
}

