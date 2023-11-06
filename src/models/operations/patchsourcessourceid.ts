/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PatchSourcesSourceIdRequest extends SpeakeasyBase {
    /**
     * ID of the source to update
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source_id" })
    sourceId: number;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    configurableSourceAttributes?: components.ConfigurableSourceAttributes;
}

/**
 * Outcome of the operation.
 */
export enum PatchSourcesSourceIdStatus {
    Success = "success",
    Updated = "updated",
    Created = "created",
    NotFound = "not_found",
    Error = "error",
}

/**
 * Successfully updated the source
 */
export class PatchSourcesSourceIdResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => components.Source)
    data?: components.Source;

    /**
     * Outcome of the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: PatchSourcesSourceIdStatus;
}

export class PatchSourcesSourceIdResponse extends SpeakeasyBase {
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
     * Successfully updated the source
     */
    @SpeakeasyMetadata()
    object?: PatchSourcesSourceIdResponseBody;
}
