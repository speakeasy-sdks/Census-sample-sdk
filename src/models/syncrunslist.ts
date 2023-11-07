/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Pagination } from "./pagination";
import { Expose, Type } from "class-transformer";

export class SyncRunsListData extends SpeakeasyBase {}

/**
 * The outcome of the request
 */
export enum SyncRunsListStatus {
    Success = "success",
}

/**
 * A successfully fetched list of results.
 */
export class SyncRunsList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => SyncRunsListData)
    data: SyncRunsListData;

    /**
     * An object to help you navigate the list of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pagination" })
    @Type(() => Pagination)
    pagination: Pagination;

    /**
     * The outcome of the request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SyncRunsListStatus;
}
