/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetSourcesSourceIdModelsModelIdRequest extends SpeakeasyBase {
    /**
     * ID of the model
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=model_id" })
    modelId: number;

    /**
     * ID of the source
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source_id" })
    sourceId: number;
}

/**
 * Outcome of the operation.
 */
export enum GetSourcesSourceIdModelsModelIdStatus {
    Success = "success",
    Updated = "updated",
    Created = "created",
    NotFound = "not_found",
    Error = "error",
}

/**
 * Successfully retrieved the model
 */
export class GetSourcesSourceIdModelsModelIdResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => components.Model)
    data?: components.Model;

    /**
     * Outcome of the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: GetSourcesSourceIdModelsModelIdStatus;
}

export class GetSourcesSourceIdModelsModelIdResponse extends SpeakeasyBase {
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
     * Successfully retrieved the model
     */
    @SpeakeasyMetadata()
    object?: GetSourcesSourceIdModelsModelIdResponseBody;
}
