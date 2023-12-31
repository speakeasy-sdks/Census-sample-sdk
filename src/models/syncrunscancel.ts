/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Expose, Type } from "class-transformer";

export class SyncRunsCancelData extends SpeakeasyBase {}

export class SyncRunsCancel extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => SyncRunsCancelData)
    data?: SyncRunsCancelData;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
