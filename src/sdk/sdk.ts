/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as models from "../models";
import { Connectors } from "./connectors";
import { Destinations } from "./destinations";
import { DestinationsConnectLinks } from "./destinationsconnectlinks";
import { Models } from "./models";
import { Objects } from "./objects";
import { Segments } from "./segments";
import { Sources } from "./sources";
import { SyncRuns } from "./syncruns";
import { Syncs } from "./syncs";
import { Tables } from "./tables";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://app.getcensus.com/api/v1"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    bearerAuth?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: models.Security | (() => Promise<models.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.4.5";
    genVersion = "2.272.7";
    userAgent = "speakeasy-sdk/typescript 0.4.5 2.272.7 1.0.0 Workspace-Management-API";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class WorkspaceManagementAPI {
    /**
     * Software components facilitating data connections and transfers between systems.
     */
    public connectors: Connectors;
    public destinationsConnectLinks: DestinationsConnectLinks;
    /**
     * Target data storage or databases for data synchronization.
     */
    public destinations: Destinations;
    /**
     * Data repositories where the data originates from.
     */
    public sources: Sources;
    /**
     * Partitions or groups of data within sources or destinations.
     */
    public segments: Segments;
    /**
     * Data structure or schema definition for data synchronization.
     */
    public models: Models;
    /**
     * Specific data entities or datasets within the source system.
     */
    public objects: Objects;
    /**
     * Containers for storing data within a destination, often part of data models.
     */
    public tables: Tables;
    public syncRuns: SyncRuns;
    /**
     * Operations related to synchronization.
     */
    public syncs: Syncs;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new models.Security({ bearerAuth: props?.bearerAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.connectors = new Connectors(this.sdkConfiguration);
        this.destinationsConnectLinks = new DestinationsConnectLinks(this.sdkConfiguration);
        this.destinations = new Destinations(this.sdkConfiguration);
        this.sources = new Sources(this.sdkConfiguration);
        this.segments = new Segments(this.sdkConfiguration);
        this.models = new Models(this.sdkConfiguration);
        this.objects = new Objects(this.sdkConfiguration);
        this.tables = new Tables(this.sdkConfiguration);
        this.syncRuns = new SyncRuns(this.sdkConfiguration);
        this.syncs = new Syncs(this.sdkConfiguration);
    }
}
