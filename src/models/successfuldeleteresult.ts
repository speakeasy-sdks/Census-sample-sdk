/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Expose } from "class-transformer";

/**
 * The outcome of the deletion request
 */
export enum SuccessfulDeleteResultStatus {
    Deleted = "deleted",
}

export class SuccessfulDeleteResult extends SpeakeasyBase {
    /**
     * The outcome of the deletion request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SuccessfulDeleteResultStatus;
}