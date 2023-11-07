/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { ModelsDelete } from "./modelsdelete";
import { AxiosResponse } from "axios";

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

export class DeleteModelResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Model successfully deleted.
     */
    @SpeakeasyMetadata()
    modelsDelete?: ModelsDelete;

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
}