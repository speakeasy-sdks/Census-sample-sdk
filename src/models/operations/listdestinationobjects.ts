/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListDestinationObjectsRequest extends SpeakeasyBase {
    /**
     * ID of the destination
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination_id" })
    destinationId: number;

    /**
     * Organizes the results based on their creation time, either ascending or descending.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
    order?: components.Order;

    /**
     * Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Determines the number of results on each page. It can't exceed 100.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
    perPage?: number;
}

/**
 * The outcome of the request
 */
export enum ListDestinationObjectsStatus {
    Success = "success",
}

/**
 * A successfully fetched list of results.
 */
export class ListDestinationObjectsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: components.DestinationObject })
    @Expose({ name: "data" })
    @Type(() => components.DestinationObject)
    data: components.DestinationObject[];

    /**
     * An object to help you navigate the list of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pagination" })
    @Type(() => components.Pagination)
    pagination: components.Pagination;

    /**
     * The outcome of the request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: ListDestinationObjectsStatus;
}

export class ListDestinationObjectsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Successfully retrieved the list of destination objects.
     */
    @SpeakeasyMetadata()
    object?: ListDestinationObjectsResponseBody;
}
