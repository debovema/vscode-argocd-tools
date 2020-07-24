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
 * OperationState contains information about state of currently performing operation on application.
 */
export interface V1alpha1OperationState {
    finishedAt?: models.V1Time;

    /**
     * Message hold any pertinent messages when attempting to perform operation (typically errors).
     */
    message?: string;

    operation?: models.V1alpha1Operation;

    phase?: string;

    startedAt?: models.V1Time;

    syncResult?: models.V1alpha1SyncOperationResult;

}
