/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Expose } from "class-transformer";

export class InitialSegmentAttributes extends SpeakeasyBase {
    /**
     * The `id` of the entity on which this segment is based.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "business_object_id" })
    businessObjectId: number;

    /**
     * A list of Atomic Molecules, Related Segment Molecules, Relationship Molecules, Molecule Groups and at most one Operation Molecule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "molecules" })
    molecules: any[];

    /**
     * The name of this segment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
