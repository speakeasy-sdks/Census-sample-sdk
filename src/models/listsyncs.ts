/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Order } from "./order";
import { SyncList } from "./synclist";
import { AxiosResponse } from "axios";

export class ListSyncsRequest extends SpeakeasyBase {
    /**
     * Organizes the results based on their creation time, either ascending or descending.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
    order?: Order;

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

export class ListSyncsResponse extends SpeakeasyBase {
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
     * Successfully retrieved the list of syncs.
     */
    @SpeakeasyMetadata()
    syncList?: SyncList;
}
