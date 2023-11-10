/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { InitialSegmentAttributes } from "./initialsegmentattributes";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateSegmentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    initialSegmentAttributes: InitialSegmentAttributes;

    /**
     * ID of the source
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source_id" })
    sourceId: number;
}

export class CreateSegmentData extends SpeakeasyBase {
    /**
     * The `id` of the newly created segment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;
}

/**
 * Outcome of the operation.
 */
export enum CreateSegmentStatus {
    Success = "success",
    Updated = "updated",
    Created = "created",
    NotFound = "not_found",
    Error = "error",
}

/**
 * Segment created successfully
 */
export class CreateSegmentResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => CreateSegmentData)
    data?: CreateSegmentData;

    /**
     * Some subproperties of the filter_segment are created asynchronously. You can query this url to fetch the status of the creation (true or false).
     *
     * @remarks
     * When status is true, it will return all properties returned in `GET /sources/{source_id}/filter_segments/{segment_id}`.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "filter_segment_source_url" })
    filterSegmentSourceUrl?: string;

    /**
     * Outcome of the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: CreateSegmentStatus;
}

export class CreateSegmentResponse extends SpeakeasyBase {
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
     * Segment created successfully
     */
    @SpeakeasyMetadata()
    object?: CreateSegmentResponseBody;
}
