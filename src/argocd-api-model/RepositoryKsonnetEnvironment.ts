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

export interface RepositoryKsonnetEnvironment {
    destination?: models.RepositoryKsonnetEnvironmentDestination;

    /**
     * KubernetesVersion is the kubernetes version the targeted cluster is running on.
     */
    k8sVersion?: string;

    name?: string;

}
