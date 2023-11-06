/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class InitialModelAttributes extends SpeakeasyBase {
    /**
     * The description for this model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The name of this model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The SQL query associated with this model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query: string;
}
