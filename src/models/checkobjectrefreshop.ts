/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { DestinationsCheckRefresh } from "./destinationscheckrefresh";
import { AxiosResponse } from "axios";

export class CheckObjectRefreshRequest extends SpeakeasyBase {
    /**
     * ID of the destination with an active refresh job
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination_id" })
    destinationId: number;

    /**
     * An `id` provided by the `refresh_objects` endpoint, used to check whether the refresh objects job has finished.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refresh_key" })
    refreshKey: number;
}

export class CheckObjectRefreshResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successfully checked the status of the job.
     */
    @SpeakeasyMetadata()
    destinationsCheckRefresh?: DestinationsCheckRefresh;

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
