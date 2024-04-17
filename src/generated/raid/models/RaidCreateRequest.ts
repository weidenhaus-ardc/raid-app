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
import type { Access } from './Access';
import {
    AccessFromJSON,
    AccessFromJSONTyped,
    AccessToJSON,
} from './Access';
import type { AlternateIdentifier } from './AlternateIdentifier';
import {
    AlternateIdentifierFromJSON,
    AlternateIdentifierFromJSONTyped,
    AlternateIdentifierToJSON,
} from './AlternateIdentifier';
import type { AlternateUrl } from './AlternateUrl';
import {
    AlternateUrlFromJSON,
    AlternateUrlFromJSONTyped,
    AlternateUrlToJSON,
} from './AlternateUrl';
import type { Contributor } from './Contributor';
import {
    ContributorFromJSON,
    ContributorFromJSONTyped,
    ContributorToJSON,
} from './Contributor';
import type { Description } from './Description';
import {
    DescriptionFromJSON,
    DescriptionFromJSONTyped,
    DescriptionToJSON,
} from './Description';
import type { Id } from './Id';
import {
    IdFromJSON,
    IdFromJSONTyped,
    IdToJSON,
} from './Id';
import type { ModelDate } from './ModelDate';
import {
    ModelDateFromJSON,
    ModelDateFromJSONTyped,
    ModelDateToJSON,
} from './ModelDate';
import type { Organisation } from './Organisation';
import {
    OrganisationFromJSON,
    OrganisationFromJSONTyped,
    OrganisationToJSON,
} from './Organisation';
import type { RelatedObject } from './RelatedObject';
import {
    RelatedObjectFromJSON,
    RelatedObjectFromJSONTyped,
    RelatedObjectToJSON,
} from './RelatedObject';
import type { RelatedRaid } from './RelatedRaid';
import {
    RelatedRaidFromJSON,
    RelatedRaidFromJSONTyped,
    RelatedRaidToJSON,
} from './RelatedRaid';
import type { SpatialCoverage } from './SpatialCoverage';
import {
    SpatialCoverageFromJSON,
    SpatialCoverageFromJSONTyped,
    SpatialCoverageToJSON,
} from './SpatialCoverage';
import type { Subject } from './Subject';
import {
    SubjectFromJSON,
    SubjectFromJSONTyped,
    SubjectToJSON,
} from './Subject';
import type { Title } from './Title';
import {
    TitleFromJSON,
    TitleFromJSONTyped,
    TitleToJSON,
} from './Title';
import type { TraditionalKnowledgeLabel } from './TraditionalKnowledgeLabel';
import {
    TraditionalKnowledgeLabelFromJSON,
    TraditionalKnowledgeLabelFromJSONTyped,
    TraditionalKnowledgeLabelToJSON,
} from './TraditionalKnowledgeLabel';

/**
 * 
 * @export
 * @interface RaidCreateRequest
 */
export interface RaidCreateRequest {
    /**
     * 
     * @type {Id}
     * @memberof RaidCreateRequest
     */
    identifier?: Id;
    /**
     * 
     * @type {Array<Title>}
     * @memberof RaidCreateRequest
     */
    title?: Array<Title>;
    /**
     * 
     * @type {ModelDate}
     * @memberof RaidCreateRequest
     */
    date?: ModelDate;
    /**
     * 
     * @type {Array<Description>}
     * @memberof RaidCreateRequest
     */
    description?: Array<Description>;
    /**
     * 
     * @type {Access}
     * @memberof RaidCreateRequest
     */
    access: Access;
    /**
     * 
     * @type {Array<AlternateUrl>}
     * @memberof RaidCreateRequest
     */
    alternateUrl?: Array<AlternateUrl>;
    /**
     * 
     * @type {Array<Contributor>}
     * @memberof RaidCreateRequest
     */
    contributor?: Array<Contributor>;
    /**
     * 
     * @type {Array<Organisation>}
     * @memberof RaidCreateRequest
     */
    organisation?: Array<Organisation>;
    /**
     * 
     * @type {Array<Subject>}
     * @memberof RaidCreateRequest
     */
    subject?: Array<Subject>;
    /**
     * 
     * @type {Array<RelatedRaid>}
     * @memberof RaidCreateRequest
     */
    relatedRaid?: Array<RelatedRaid>;
    /**
     * 
     * @type {Array<RelatedObject>}
     * @memberof RaidCreateRequest
     */
    relatedObject?: Array<RelatedObject>;
    /**
     * 
     * @type {Array<AlternateIdentifier>}
     * @memberof RaidCreateRequest
     */
    alternateIdentifier?: Array<AlternateIdentifier>;
    /**
     * 
     * @type {Array<SpatialCoverage>}
     * @memberof RaidCreateRequest
     */
    spatialCoverage?: Array<SpatialCoverage>;
    /**
     * 
     * @type {Array<TraditionalKnowledgeLabel>}
     * @memberof RaidCreateRequest
     */
    traditionalKnowledgeLabel?: Array<TraditionalKnowledgeLabel>;
}

/**
 * Check if a given object implements the RaidCreateRequest interface.
 */
export function instanceOfRaidCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "access" in value;

    return isInstance;
}

export function RaidCreateRequestFromJSON(json: any): RaidCreateRequest {
    return RaidCreateRequestFromJSONTyped(json, false);
}

export function RaidCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RaidCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifier': !exists(json, 'identifier') ? undefined : IdFromJSON(json['identifier']),
        'title': !exists(json, 'title') ? undefined : ((json['title'] as Array<any>).map(TitleFromJSON)),
        'date': !exists(json, 'date') ? undefined : ModelDateFromJSON(json['date']),
        'description': !exists(json, 'description') ? undefined : ((json['description'] as Array<any>).map(DescriptionFromJSON)),
        'access': AccessFromJSON(json['access']),
        'alternateUrl': !exists(json, 'alternateUrl') ? undefined : ((json['alternateUrl'] as Array<any>).map(AlternateUrlFromJSON)),
        'contributor': !exists(json, 'contributor') ? undefined : ((json['contributor'] as Array<any>).map(ContributorFromJSON)),
        'organisation': !exists(json, 'organisation') ? undefined : ((json['organisation'] as Array<any>).map(OrganisationFromJSON)),
        'subject': !exists(json, 'subject') ? undefined : ((json['subject'] as Array<any>).map(SubjectFromJSON)),
        'relatedRaid': !exists(json, 'relatedRaid') ? undefined : ((json['relatedRaid'] as Array<any>).map(RelatedRaidFromJSON)),
        'relatedObject': !exists(json, 'relatedObject') ? undefined : ((json['relatedObject'] as Array<any>).map(RelatedObjectFromJSON)),
        'alternateIdentifier': !exists(json, 'alternateIdentifier') ? undefined : ((json['alternateIdentifier'] as Array<any>).map(AlternateIdentifierFromJSON)),
        'spatialCoverage': !exists(json, 'spatialCoverage') ? undefined : ((json['spatialCoverage'] as Array<any>).map(SpatialCoverageFromJSON)),
        'traditionalKnowledgeLabel': !exists(json, 'traditionalKnowledgeLabel') ? undefined : ((json['traditionalKnowledgeLabel'] as Array<any>).map(TraditionalKnowledgeLabelFromJSON)),
    };
}

export function RaidCreateRequestToJSON(value?: RaidCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier': IdToJSON(value.identifier),
        'title': value.title === undefined ? undefined : ((value.title as Array<any>).map(TitleToJSON)),
        'date': ModelDateToJSON(value.date),
        'description': value.description === undefined ? undefined : ((value.description as Array<any>).map(DescriptionToJSON)),
        'access': AccessToJSON(value.access),
        'alternateUrl': value.alternateUrl === undefined ? undefined : ((value.alternateUrl as Array<any>).map(AlternateUrlToJSON)),
        'contributor': value.contributor === undefined ? undefined : ((value.contributor as Array<any>).map(ContributorToJSON)),
        'organisation': value.organisation === undefined ? undefined : ((value.organisation as Array<any>).map(OrganisationToJSON)),
        'subject': value.subject === undefined ? undefined : ((value.subject as Array<any>).map(SubjectToJSON)),
        'relatedRaid': value.relatedRaid === undefined ? undefined : ((value.relatedRaid as Array<any>).map(RelatedRaidToJSON)),
        'relatedObject': value.relatedObject === undefined ? undefined : ((value.relatedObject as Array<any>).map(RelatedObjectToJSON)),
        'alternateIdentifier': value.alternateIdentifier === undefined ? undefined : ((value.alternateIdentifier as Array<any>).map(AlternateIdentifierToJSON)),
        'spatialCoverage': value.spatialCoverage === undefined ? undefined : ((value.spatialCoverage as Array<any>).map(SpatialCoverageToJSON)),
        'traditionalKnowledgeLabel': value.traditionalKnowledgeLabel === undefined ? undefined : ((value.traditionalKnowledgeLabel as Array<any>).map(TraditionalKnowledgeLabelToJSON)),
    };
}
