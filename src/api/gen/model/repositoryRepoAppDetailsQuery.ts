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
import { V1alpha1ApplicationSource } from './v1alpha1ApplicationSource';

export class RepositoryRepoAppDetailsQuery {
    'source'?: V1alpha1ApplicationSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "V1alpha1ApplicationSource"
        }    ];

    static getAttributeTypeMap() {
        return RepositoryRepoAppDetailsQuery.attributeTypeMap;
    }
}

