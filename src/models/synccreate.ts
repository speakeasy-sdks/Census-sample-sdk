/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Expose, Type } from "class-transformer";

export class SyncCreateData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sync_id" })
    syncId?: number;
}

/**
 * Outcome of the operation.
 */
export enum SyncCreateStatus {
    Success = "success",
    Updated = "updated",
    Created = "created",
    NotFound = "not_found",
    Error = "error",
}

export class SyncCreate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => SyncCreateData)
    data?: SyncCreateData;

    /**
     * Outcome of the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: SyncCreateStatus;
}
