/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CancelSyncRunRequest extends SpeakeasyBase {
    /**
     * ID of the sync run
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sync_run_id" })
    syncRunId: number;
}

export class CancelSyncRunData extends SpeakeasyBase {}

/**
 * Successfully cancelled the sync
 */
export class CancelSyncRunResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => CancelSyncRunData)
    data?: CancelSyncRunData;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}

export class CancelSyncRunResponse extends SpeakeasyBase {
    /**
     * Successfully cancelled the sync
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: CancelSyncRunResponseBody;

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
}