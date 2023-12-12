/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { DestinationsStartRefresh } from "./destinationsstartrefresh";
import { AxiosResponse } from "axios";

export class StartObjectRefreshRequest extends SpeakeasyBase {
    /**
     * ID of the destination to update
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination_id" })
    destinationId: number;
}

export class StartObjectRefreshResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successfully enqueued the object refresh job.
     */
    @SpeakeasyMetadata()
    destinationsStartRefresh?: DestinationsStartRefresh;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}