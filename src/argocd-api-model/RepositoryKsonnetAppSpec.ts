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

export interface RepositoryKsonnetAppSpec {
    environments?: { [key: string]: models.RepositoryKsonnetEnvironment; };

    name?: string;

    parameters?: Array<models.V1alpha1KsonnetParameter>;

}
