/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class DestinationAttributes extends SpeakeasyBase {
    /**
     * The id used to identify the destination connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connection_id" })
    connectionId?: number;

    /**
     * Where to insert a union object (for Salesforce connections).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lead_union_insert_to" })
    leadUnionInsertTo?: string;

    /**
     * The full name of the destination object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object?: string;
}
