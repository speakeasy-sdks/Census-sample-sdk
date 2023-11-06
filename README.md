# Workspace-Management-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/Census-sample-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/Census-sample-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add https://github.com/speakeasy-sdks/Census-sample-sdk
```

## Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Census-sample-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { FetchConnectorRequest } from "Workspace-Management-API/dist/models/operations";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetchConnector(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations


## [.connectors](docs/sdks/connectors/README.md)

* [fetchConnector](docs/sdks/connectors/README.md#fetchconnector) - Fetch connector
* [listConnectors](docs/sdks/connectors/README.md#listconnectors) - List connectors

## [.destinationConnectLinks](docs/sdks/destinationconnectlinks/README.md)

* [createDestinationConnectLink](docs/sdks/destinationconnectlinks/README.md#createdestinationconnectlink) - Create a new destination connect link
* [fetchDestinationConnectLink](docs/sdks/destinationconnectlinks/README.md#fetchdestinationconnectlink) - Fetch destination connect link
* [listDestinationConnectLinkTypes](docs/sdks/destinationconnectlinks/README.md#listdestinationconnectlinktypes) - List destination connect link types
* [listDestinationConnectLinks](docs/sdks/destinationconnectlinks/README.md#listdestinationconnectlinks) - List destination connect links
* [revokeDestinationConnectLink](docs/sdks/destinationconnectlinks/README.md#revokedestinationconnectlink) - Revoke a destination connect link

## [.destinations](docs/sdks/destinations/README.md)

* [createDestination](docs/sdks/destinations/README.md#createdestination) - Create a new destination
* [deleteDestination](docs/sdks/destinations/README.md#deletedestination) - Delete destination
* [fetchDestinationObject](docs/sdks/destinations/README.md#fetchdestinationobject) - Fetch destination object
* [getDestinationsDestinationId](docs/sdks/destinations/README.md#getdestinationsdestinationid) - Fetch destination
* [getDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsStatus](docs/sdks/destinations/README.md#getdestinationsdestinationidobjectsobjectfullnamerefreshfieldsstatus) - Check fields refresh
* [getDestinationsDestinationIdRefreshObjectsStatus](docs/sdks/destinations/README.md#getdestinationsdestinationidrefreshobjectsstatus) - Check object refresh
* [listDestinationObjects](docs/sdks/destinations/README.md#listdestinationobjects) - List destination objects
* [listDestinations](docs/sdks/destinations/README.md#listdestinations) - List destinations
* [patchDestinationsDestinationId](docs/sdks/destinations/README.md#patchdestinationsdestinationid) - Update destination
* [postDestinationsDestinationIdObjectsObjectFullNameRefreshFields](docs/sdks/destinations/README.md#postdestinationsdestinationidobjectsobjectfullnamerefreshfields) - Start fields refresh
* [postDestinationsDestinationIdRefreshObjects](docs/sdks/destinations/README.md#postdestinationsdestinationidrefreshobjects) - Start object refresh

## [.objects](docs/sdks/objects/README.md)

* [listDestinationObjects](docs/sdks/objects/README.md#listdestinationobjects) - List destination objects
* [listSourceObjects](docs/sdks/objects/README.md#listsourceobjects) - List source objects

## [.sources](docs/sdks/sources/README.md)

* [createSource](docs/sdks/sources/README.md#createsource) - Create a new source
* [deleteSource](docs/sdks/sources/README.md#deletesource) - Delete source
* [getSourcesSourceId](docs/sdks/sources/README.md#getsourcessourceid) - Fetch source
* [getSourcesSourceIdRefreshTablesStatus](docs/sdks/sources/README.md#getsourcessourceidrefreshtablesstatus) - Check table refresh
* [listSources](docs/sdks/sources/README.md#listsources) - List sources
* [patchSourcesSourceId](docs/sdks/sources/README.md#patchsourcessourceid) - Update source
* [postSourcesSourceIdRefreshTables](docs/sdks/sources/README.md#postsourcessourceidrefreshtables) - Start table refresh

## [.segments](docs/sdks/segments/README.md)

* [createSegment](docs/sdks/segments/README.md#createsegment) - Create a new segment
* [deleteSegment](docs/sdks/segments/README.md#deletesegment) - Delete Segment
* [getSourcesSourceIdFilterSegmentsSegmentId](docs/sdks/segments/README.md#getsourcessourceidfiltersegmentssegmentid) - Fetch segment
* [listSegments](docs/sdks/segments/README.md#listsegments) - List segments
* [patchSourcesSourceIdFilterSegmentsSegmentId](docs/sdks/segments/README.md#patchsourcessourceidfiltersegmentssegmentid) - Update segment

## [.models](docs/sdks/models/README.md)

* [createModel](docs/sdks/models/README.md#createmodel) - Create a new model
* [deleteModel](docs/sdks/models/README.md#deletemodel) - Delete model
* [getSourcesSourceIdModelsModelId](docs/sdks/models/README.md#getsourcessourceidmodelsmodelid) - Fetch model
* [getSourcesSourceIdModelsModelIdRefreshColumnsStatus](docs/sdks/models/README.md#getsourcessourceidmodelsmodelidrefreshcolumnsstatus) - Check column refresh
* [listModels](docs/sdks/models/README.md#listmodels) - List models
* [patchSourcesSourceIdModelsModelId](docs/sdks/models/README.md#patchsourcessourceidmodelsmodelid) - Update model
* [postSourcesSourceIdModelsModelIdRefreshColumns](docs/sdks/models/README.md#postsourcessourceidmodelsmodelidrefreshcolumns) - Start column refresh

## [.tables](docs/sdks/tables/README.md)

* [getSourcesSourceIdTablesTableId](docs/sdks/tables/README.md#getsourcessourceidtablestableid) - Fetch table
* [getSourcesSourceIdTablesTableIdRefreshColumnsStatus](docs/sdks/tables/README.md#getsourcessourceidtablestableidrefreshcolumnsstatus) - Check column refresh
* [postSourcesSourceIdTablesTableIdRefreshColumns](docs/sdks/tables/README.md#postsourcessourceidtablestableidrefreshcolumns) - Start column refresh

## [.syncRuns](docs/sdks/syncruns/README.md)

* [cancelSyncRun](docs/sdks/syncruns/README.md#cancelsyncrun) - Cancel a running sync
* [fetchSyncRun](docs/sdks/syncruns/README.md#fetchsyncrun) - Fetch sync run
* [getSyncsSyncIdSyncRuns](docs/sdks/syncruns/README.md#getsyncssyncidsyncruns) - List sync runs

## [.syncs](docs/sdks/syncs/README.md)

* [createSync](docs/sdks/syncs/README.md#createsync) - Create a new sync
* [deleteSync](docs/sdks/syncs/README.md#deletesync) - Delete a sync
* [fetchSync](docs/sdks/syncs/README.md#fetchsync) - Fetch sync
* [getSyncs](docs/sdks/syncs/README.md#getsyncs) - List Syncs
* [triggerSync](docs/sdks/syncs/README.md#triggersync) - Trigger a sync run
* [updateSync](docs/sdks/syncs/README.md#updatesync) - Update a sync
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


## Example

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { FetchDestinationConnectLinkRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const connectLinkId: number = 717794;

  
  let res;
  try {
    res = await sdk.destinationConnectLinks.fetchDestinationConnectLink(connectLinkId);
  } catch (e) { 
    if (e instanceof 404_application/json_object) {
      console.error(e) // handle exception 
    
  }


  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End Error Handling -->

<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://app.getcensus.com/api/v1` | None |

For example:


```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { FetchConnectorRequest } from "Workspace-Management-API/dist/models/operations";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "",
        serverIdx: 0,
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetchConnector(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { FetchConnectorRequest } from "Workspace-Management-API/dist/models/operations";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "",
        serverURL: "https://app.getcensus.com/api/v1",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetchConnector(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->

<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from Workspace-Management-API import WorkspaceManagementAPI;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new WorkspaceManagementAPI({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
