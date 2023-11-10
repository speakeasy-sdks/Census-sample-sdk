/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { DestinationsDelete } from "./destinationsdelete";
import { AxiosResponse } from "axios";

export class DeleteDestinationRequest extends SpeakeasyBase {
    /**
     * The ID of the destination to be deleted.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination_id" })
    destinationId: number;
}

export class DeleteDestinationResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Destination successfully deleted.
     */
    @SpeakeasyMetadata()
    destinationsDelete?: DestinationsDelete;

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
