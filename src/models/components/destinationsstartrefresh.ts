/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class DestinationsStartRefresh extends SpeakeasyBase {
    /**
     * They key that can be used to check the status of the refresh job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refresh_key" })
    refreshKey?: number;
}
