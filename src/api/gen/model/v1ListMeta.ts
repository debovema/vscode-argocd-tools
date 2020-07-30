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

/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
export class V1ListMeta {
    /**
    * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
    */
    '_continue'?: string;
    'remainingItemCount'?: string;
    'resourceVersion'?: string;
    /**
    * selfLink is a URL representing this object. Populated by the system. Read-only.  DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release. +optional
    */
    'selfLink'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_continue",
            "baseName": "continue",
            "type": "string"
        },
        {
            "name": "remainingItemCount",
            "baseName": "remainingItemCount",
            "type": "string"
        },
        {
            "name": "resourceVersion",
            "baseName": "resourceVersion",
            "type": "string"
        },
        {
            "name": "selfLink",
            "baseName": "selfLink",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1ListMeta.attributeTypeMap;
    }
}

