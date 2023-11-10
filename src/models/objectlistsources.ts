/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Pagination } from "./pagination";
import { Expose, Type } from "class-transformer";

/**
 * A list of source objects that this connection contains. May be either a `Model`, `Segment`, or `Table`.
 */
export class ObjectListSourcesData extends SpeakeasyBase {}

/**
 * The outcome of the request
 */
export enum ObjectListSourcesStatus {
    Success = "success",
}

/**
 * A successfully fetched list of results.
 */
export class ObjectListSources extends SpeakeasyBase {
    /**
     * A list of source objects that this connection contains. May be either a `Model`, `Segment`, or `Table`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => ObjectListSourcesData)
    data: ObjectListSourcesData;

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
    status: ObjectListSourcesStatus;
}
