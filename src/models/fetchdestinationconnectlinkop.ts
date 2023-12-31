/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { DestinationsConnectFetch } from "./destinationsconnectfetch";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

export class FetchDestinationConnectLinkRequest extends SpeakeasyBase {
    /**
     * ID of the connect link
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connect_link_id" })
    connectLinkId: number;
}

/**
 * HTTP status code.
 */
export enum FetchDestinationConnectLinkStatus {
    FourHundredAndFour = 404,
}

/**
 * Resource not found.
 */
export class FetchDestinationConnectLinkResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    @Exclude()
    rawResponse?: AxiosResponse;

    /**
     * HTTP status code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: FetchDestinationConnectLinkStatus;

    constructor(err?: FetchDestinationConnectLinkResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "FetchDestinationConnectLinkResponseBody";
        Object.setPrototypeOf(this, FetchDestinationConnectLinkResponseBody.prototype);
    }
}

export class FetchDestinationConnectLinkResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successfully retrieved destination connect link details.
     */
    @SpeakeasyMetadata()
    destinationsConnectFetch?: DestinationsConnectFetch;

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
