/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FetchDestinationObjectRequest extends SpeakeasyBase {
    /**
     * ID of the destination that owns the object
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination_id" })
    destinationId: number;

    /**
     * `full_name` of the destination object
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object_full_name" })
    objectFullName: number;
}

/**
 * Outcome of the operation.
 */
export enum FetchDestinationObjectStatus {
    Success = "success",
    Updated = "updated",
    Created = "created",
    NotFound = "not_found",
    Error = "error",
}

/**
 * Successfully retrieved the destination object
 */
export class FetchDestinationObjectResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => components.DestinationObject)
    data?: components.DestinationObject;

    /**
     * Outcome of the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: FetchDestinationObjectStatus;
}

export class FetchDestinationObjectResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Successfully retrieved the destination object
     */
    @SpeakeasyMetadata()
    object?: FetchDestinationObjectResponseBody;
}
