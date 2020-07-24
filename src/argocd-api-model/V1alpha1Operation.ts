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

/**
 * Operation contains requested operation parameters.
 */
export interface V1alpha1Operation {
    info?: Array<models.V1alpha1Info>;

    initiatedBy?: models.V1alpha1OperationInitiator;

    sync?: models.V1alpha1SyncOperation;

}
