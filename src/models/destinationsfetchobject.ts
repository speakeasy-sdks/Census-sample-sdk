/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { DestinationObject } from "./destinationobject";
import { Expose, Type } from "class-transformer";

/**
 * Outcome of the operation.
 */
export enum DestinationsFetchObjectStatus {
    Success = "success",
    Updated = "updated",
    Created = "created",
    NotFound = "not_found",
    Error = "error",
}

export class DestinationsFetchObject extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => DestinationObject)
    data?: DestinationObject;

    /**
     * Outcome of the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: DestinationsFetchObjectStatus;
}