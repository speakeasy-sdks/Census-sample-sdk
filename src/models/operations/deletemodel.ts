/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteModelRequest extends SpeakeasyBase {
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
 * Model successfully deleted.
 */
export class DeleteModelResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class DeleteModelResponse extends SpeakeasyBase {
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
     * Model successfully deleted.
     */
    @SpeakeasyMetadata()
    object?: DeleteModelResponseBody;
}