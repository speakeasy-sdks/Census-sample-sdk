/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * HTTP status code.
 */
export enum RevokeDestinationConnectLinkStatus {
    FourHundredAndFour = 404,
}

/**
 * Resource not found.
 */
export class RevokeDestinationConnectLinkResponseBody extends Error {
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
    status?: RevokeDestinationConnectLinkStatus;

    constructor(err?: RevokeDestinationConnectLinkResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "RevokeDestinationConnectLinkResponseBody";
        Object.setPrototypeOf(this, RevokeDestinationConnectLinkResponseBody.prototype);
    }
}
