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
import type { DescriptionType } from './DescriptionType';
import {
    DescriptionTypeFromJSON,
    DescriptionTypeFromJSONTyped,
    DescriptionTypeToJSON,
} from './DescriptionType';
import type { Language } from './Language';
import {
    LanguageFromJSON,
    LanguageFromJSONTyped,
    LanguageToJSON,
} from './Language';

/**
 * 
 * @export
 * @interface Description
 */
export interface Description {
    /**
     * 
     * @type {string}
     * @memberof Description
     */
    text: string;
    /**
     * 
     * @type {DescriptionType}
     * @memberof Description
     */
    type: DescriptionType;
    /**
     * 
     * @type {Language}
     * @memberof Description
     */
    language?: Language;
}

/**
 * Check if a given object implements the Description interface.
 */
export function instanceOfDescription(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DescriptionFromJSON(json: any): Description {
    return DescriptionFromJSONTyped(json, false);
}

export function DescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Description {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'text': json['text'],
        'type': DescriptionTypeFromJSON(json['type']),
        'language': !exists(json, 'language') ? undefined : LanguageFromJSON(json['language']),
    };
}

export function DescriptionToJSON(value?: Description | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'text': value.text,
        'type': DescriptionTypeToJSON(value.type),
        'language': LanguageToJSON(value.language),
    };
}

