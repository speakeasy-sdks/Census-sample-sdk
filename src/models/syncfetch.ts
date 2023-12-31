/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Sync } from "./sync";
import { Expose, Type } from "class-transformer";

/**
 * The outcome of the fetch request
 */
export enum SyncFetchStatus {
    Success = "success",
}

export class SyncFetch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Sync)
    data: Sync;

    /**
     * The outcome of the fetch request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SyncFetchStatus;
}
