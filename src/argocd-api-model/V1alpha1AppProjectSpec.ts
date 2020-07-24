/**
 * Consolidate Services
 * Description of all APIs
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface V1alpha1AppProjectSpec {
    clusterResourceWhitelist?: Array<models.V1GroupKind>;

    description?: string;

    destinations?: Array<models.V1alpha1ApplicationDestination>;

    namespaceResourceBlacklist?: Array<models.V1GroupKind>;

    namespaceResourceWhitelist?: Array<models.V1GroupKind>;

    orphanedResources?: models.V1alpha1OrphanedResourcesMonitorSettings;

    roles?: Array<models.V1alpha1ProjectRole>;

    signatureKeys?: Array<models.V1alpha1SignatureKey>;

    sourceRepos?: Array<string>;

    syncWindows?: Array<models.V1alpha1SyncWindow>;

}
