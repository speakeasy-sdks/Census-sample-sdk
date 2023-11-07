/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Invitation } from "./invitation";
import { Expose, Type } from "class-transformer";

/**
 * The outcome of the update request
 */
export enum SyncUpdateStatus {
    Updated = "updated",
}

export class SyncUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Invitation)
    data: Invitation;

    /**
     * The outcome of the update request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SyncUpdateStatus;
}