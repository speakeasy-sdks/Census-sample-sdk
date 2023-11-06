/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as components from "../models/components";
import { Connectors } from "./connectors";
import { DestinationConnectLinks } from "./destinationconnectlinks";
import { Destinations } from "./destinations";
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
    security?: components.Security | (() => Promise<components.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.1.0";
    genVersion = "2.179.0";
    userAgent = "speakeasy-sdk/typescript 0.1.0 2.179.0 1.0.0 Workspace-Management-API";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class WorkspaceManagementAPI {
    public connectors: Connectors;
    public destinationConnectLinks: DestinationConnectLinks;
    public destinations: Destinations;
    public objects: Objects;
    public sources: Sources;
    public segments: Segments;
    public models: Models;
    public tables: Tables;
    public syncRuns: SyncRuns;
    public syncs: Syncs;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new components.Security({ bearerAuth: props?.bearerAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.connectors = new Connectors(this.sdkConfiguration);
        this.destinationConnectLinks = new DestinationConnectLinks(this.sdkConfiguration);
        this.destinations = new Destinations(this.sdkConfiguration);
        this.objects = new Objects(this.sdkConfiguration);
        this.sources = new Sources(this.sdkConfiguration);
        this.segments = new Segments(this.sdkConfiguration);
        this.models = new Models(this.sdkConfiguration);
        this.tables = new Tables(this.sdkConfiguration);
        this.syncRuns = new SyncRuns(this.sdkConfiguration);
        this.syncs = new Syncs(this.sdkConfiguration);
    }
}
