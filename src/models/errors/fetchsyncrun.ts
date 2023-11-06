/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { classToPlain, Exclude, Expose } from "class-transformer";

/**
 * HTTP status code.
 */
export enum FetchSyncRunStatus {
    FourHundredAndFour = 404,
}

/**
 * Resource not found.
 */
export class FetchSyncRunResponseBody extends Error {
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
    status?: FetchSyncRunStatus;

    constructor(err?: FetchSyncRunResponseBody) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "FetchSyncRunResponseBody";
        Object.setPrototypeOf(this, FetchSyncRunResponseBody.prototype);
    }
}
