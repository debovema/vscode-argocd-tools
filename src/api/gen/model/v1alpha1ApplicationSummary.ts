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

export class V1alpha1ApplicationSummary {
    /**
    * ExternalURLs holds all external URLs of application child resources.
    */
    'externalURLs'?: Array<string>;
    /**
    * Images holds all images of application child resources.
    */
    'images'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "externalURLs",
            "baseName": "externalURLs",
            "type": "Array<string>"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ApplicationSummary.attributeTypeMap;
    }
}

