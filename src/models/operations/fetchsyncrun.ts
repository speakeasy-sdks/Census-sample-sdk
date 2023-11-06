/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FetchSyncRunRequest extends SpeakeasyBase {
    /**
     * ID of the sync run
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sync_run_id" })
    syncRunId: number;
}

/**
 * The outcome of the fetch request
 */
export enum FetchSyncRunStatus {
    Success = "success",
}

/**
 * Successfully retrieved sync run details.
 */
export class FetchSyncRunResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => components.SyncRun)
    data: components.SyncRun;

    /**
     * The outcome of the fetch request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: FetchSyncRunStatus;
}

export class FetchSyncRunResponse extends SpeakeasyBase {
    /**
     * Successfully retrieved sync run details.
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: FetchSyncRunResponseBody;

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
