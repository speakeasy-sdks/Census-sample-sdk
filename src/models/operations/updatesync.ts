/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateSyncRequest extends SpeakeasyBase {
    /**
     * ID of the sync
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sync_id" })
    syncId: number;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    syncAttributes?: components.SyncAttributes;
}

/**
 * The outcome of the update request
 */
export enum UpdateSyncStatus {
    Updated = "updated",
}

/**
 * Successfully updated the sync
 */
export class UpdateSyncResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => components.Invitation)
    data: components.Invitation;

    /**
     * The outcome of the update request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: UpdateSyncStatus;
}

export class UpdateSyncResponse extends SpeakeasyBase {
    /**
     * Successfully updated the sync
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: UpdateSyncResponseBody;

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