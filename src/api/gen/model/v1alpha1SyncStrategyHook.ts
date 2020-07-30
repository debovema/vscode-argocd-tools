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
import { V1alpha1SyncStrategyApply } from './v1alpha1SyncStrategyApply';

/**
* SyncStrategyHook will perform a sync using hooks annotations. If no hook annotation is specified falls back to `kubectl apply`.
*/
export class V1alpha1SyncStrategyHook {
    'syncStrategyApply'?: V1alpha1SyncStrategyApply;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "syncStrategyApply",
            "baseName": "syncStrategyApply",
            "type": "V1alpha1SyncStrategyApply"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1SyncStrategyHook.attributeTypeMap;
    }
}

