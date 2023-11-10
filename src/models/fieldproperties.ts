/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Expose } from "class-transformer";

export enum Operations {
    Overwrite = "overwrite",
    Merge = "merge",
}

/**
 * A field available on a destination object that can be mapped to.
 */
export class FieldProperties extends SpeakeasyBase {
    /**
     * Whether or not this field is an array type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "array" })
    array?: boolean;

    /**
     * Whether or not this field can be the primary identifier for a create only sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "can_be_insert_key" })
    canBeInsertKey?: boolean;

    /**
     * Whether or not this field can be the identifier for a lookup on its containing object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "can_be_reference_key" })
    canBeReferenceKey?: boolean;

    /**
     * Whether or not this field can be the primary identifier for an update only sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "can_be_update_key" })
    canBeUpdateKey?: boolean;

    /**
     * Whether or not this field can be the primary identifier for an upsert sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "can_be_upsert_key" })
    canBeUpsertKey?: boolean;

    /**
     * Whether or not this field can be created in the destination if it doesn't exist.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createable" })
    createable?: boolean;

    /**
     * The full name for this field. This is used to identify the field in the API.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "full_name" })
    fullName?: string;

    /**
     * The label for this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "label" })
    label?: string;

    /**
     * What object, if any, that this field references.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lookup_object" })
    lookupObject?: string;

    /**
     * For an array type, what operations are supported on this field. One of the following types:
     *
     * @remarks
     * - `overwrite`: Overwrite existing values with inputted values
     * - `merge`: Merge inputted values with existing values
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "operations" })
    operations?: Operations[];

    /**
     * If a value exists in the destination for this field, whether or not it can be overwritten by Census.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preserve_values_supported" })
    preserveValuesSupported?: boolean;

    /**
     * Whether or not this field is required.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "required_for_mapping" })
    requiredForMapping?: boolean;

    /**
     * The type of this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    /**
     * Whether or not this field can be updated in the destination.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updateable" })
    updateable?: boolean;
}
