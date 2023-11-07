/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class DeleteSourceRequest extends SpeakeasyBase {
    /**
     * The ID of the source to be deleted.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source_id" })
    sourceId: number;
}

export class DeleteSourceResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Source successfully deleted.
     */
    @SpeakeasyMetadata()
    sourcesDelete?: components.SourcesDelete;

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
