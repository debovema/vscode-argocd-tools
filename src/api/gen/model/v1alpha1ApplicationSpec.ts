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
import { V1alpha1ApplicationDestination } from './v1alpha1ApplicationDestination';
import { V1alpha1ApplicationSource } from './v1alpha1ApplicationSource';
import { V1alpha1Info } from './v1alpha1Info';
import { V1alpha1ResourceIgnoreDifferences } from './v1alpha1ResourceIgnoreDifferences';
import { V1alpha1SyncPolicy } from './v1alpha1SyncPolicy';

/**
* ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision.
*/
export class V1alpha1ApplicationSpec {
    'destination'?: V1alpha1ApplicationDestination;
    'ignoreDifferences'?: Array<V1alpha1ResourceIgnoreDifferences>;
    'info'?: Array<V1alpha1Info>;
    /**
    * Project is a application project name. Empty name means that application belongs to \'default\' project.
    */
    'project'?: string;
    /**
    * This limits this number of items kept in the apps revision history. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
    */
    'revisionHistoryLimit'?: string;
    'source'?: V1alpha1ApplicationSource;
    'syncPolicy'?: V1alpha1SyncPolicy;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destination",
            "baseName": "destination",
            "type": "V1alpha1ApplicationDestination"
        },
        {
            "name": "ignoreDifferences",
            "baseName": "ignoreDifferences",
            "type": "Array<V1alpha1ResourceIgnoreDifferences>"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "Array<V1alpha1Info>"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "revisionHistoryLimit",
            "baseName": "revisionHistoryLimit",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1alpha1ApplicationSource"
        },
        {
            "name": "syncPolicy",
            "baseName": "syncPolicy",
            "type": "V1alpha1SyncPolicy"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ApplicationSpec.attributeTypeMap;
    }
}

