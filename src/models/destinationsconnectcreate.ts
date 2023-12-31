/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { DestinationConnectLink } from "./destinationconnectlink";
import { Expose, Type } from "class-transformer";

/**
 * Outcome of the operation.
 */
export enum DestinationsConnectCreateStatus {
    Success = "success",
    Updated = "updated",
    Created = "created",
    NotFound = "not_found",
    Error = "error",
}

export class DestinationsConnectCreate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => DestinationConnectLink)
    data?: DestinationConnectLink;

    /**
     * Outcome of the operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: DestinationsConnectCreateStatus;
}
