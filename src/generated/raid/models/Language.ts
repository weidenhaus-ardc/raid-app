/* tslint:disable */
/* eslint-disable */
/**
 * RAID v2 API
 * This file is where all the endpoint paths are defined, it\'s the \"top level\' of the OpenAPI definition that links all the different files together. The `3.0` in the filename refers to this file being based on OpenAPI 3.0  as opposed to OpenAPI 3.1, which the tooling doesn\'t support yet. The `2.0.0` in the version field refers to the fact that there\'s already  a `1.0.0` used for the legacy RAiD application. Note that swagger ui doesn\'t currently work with our spec,  see https://github.com/swagger-api/swagger-ui/issues/7724 But the spec works fine with openapi-generator tooling. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: contact@raid.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Language
 */
export interface Language {
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    schemaUri: string;
}

/**
 * Check if a given object implements the Language interface.
 */
export function instanceOfLanguage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "schemaUri" in value;

    return isInstance;
}

export function LanguageFromJSON(json: any): Language {
    return LanguageFromJSONTyped(json, false);
}

export function LanguageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Language {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'schemaUri': json['schemaUri'],
    };
}

export function LanguageToJSON(value?: Language | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'schemaUri': value.schemaUri,
    };
}

