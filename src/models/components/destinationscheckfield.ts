/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Status of the job.
 */
export enum DestinationsCheckFieldStatus {
    Completed = "completed",
    Processing = "processing",
}

export class DestinationsCheckField extends SpeakeasyBase {
    /**
     * Status of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: DestinationsCheckFieldStatus;
}
