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
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Census-sample-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Census-sample-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetch(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [connectors](docs/sdks/connectors/README.md)

* [fetch](docs/sdks/connectors/README.md#fetch) - Fetch connector
* [list](docs/sdks/connectors/README.md#list) - List connectors

### [destinationsConnectLinks](docs/sdks/destinationsconnectlinks/README.md)

* [create](docs/sdks/destinationsconnectlinks/README.md#create) - Create a new destination connect link
* [fetch](docs/sdks/destinationsconnectlinks/README.md#fetch) - Fetch destination connect link
* [list](docs/sdks/destinationsconnectlinks/README.md#list) - List destination connect links
* [listTypes](docs/sdks/destinationsconnectlinks/README.md#listtypes) - List destination connect link types
* [revoke](docs/sdks/destinationsconnectlinks/README.md#revoke) - Revoke a destination connect link

### [destinations](docs/sdks/destinations/README.md)

* [checkFieldRefresh](docs/sdks/destinations/README.md#checkfieldrefresh) - Check fields refresh
* [checkObjectRefresh](docs/sdks/destinations/README.md#checkobjectrefresh) - Check object refresh
* [create](docs/sdks/destinations/README.md#create) - Create a new destination
* [delete](docs/sdks/destinations/README.md#delete) - Delete destination
* [fetch](docs/sdks/destinations/README.md#fetch) - Fetch destination
* [fetchObject](docs/sdks/destinations/README.md#fetchobject) - Fetch destination object
* [list](docs/sdks/destinations/README.md#list) - List destinations
* [listObjects](docs/sdks/destinations/README.md#listobjects) - List destination objects
* [startFieldRefresh](docs/sdks/destinations/README.md#startfieldrefresh) - Start fields refresh
* [startObjectRefresh](docs/sdks/destinations/README.md#startobjectrefresh) - Start object refresh
* [update](docs/sdks/destinations/README.md#update) - Update destination

### [sources](docs/sdks/sources/README.md)

* [check](docs/sdks/sources/README.md#check) - Check table refresh
* [create](docs/sdks/sources/README.md#create) - Create a new source
* [delete](docs/sdks/sources/README.md#delete) - Delete source
* [fetch](docs/sdks/sources/README.md#fetch) - Fetch source
* [list](docs/sdks/sources/README.md#list) - List sources
* [start](docs/sdks/sources/README.md#start) - Start table refresh
* [update](docs/sdks/sources/README.md#update) - Update source

### [segments](docs/sdks/segments/README.md)

* [create](docs/sdks/segments/README.md#create) - Create a new segment
* [delete](docs/sdks/segments/README.md#delete) - Delete Segment
* [fetch](docs/sdks/segments/README.md#fetch) - Fetch segment
* [list](docs/sdks/segments/README.md#list) - List segments
* [update](docs/sdks/segments/README.md#update) - Update segment

### [models](docs/sdks/models/README.md)

* [checkColumnRefresh](docs/sdks/models/README.md#checkcolumnrefresh) - Check column refresh
* [create](docs/sdks/models/README.md#create) - Create a new model
* [delete](docs/sdks/models/README.md#delete) - Delete model
* [fetch](docs/sdks/models/README.md#fetch) - Fetch model
* [list](docs/sdks/models/README.md#list) - List models
* [startColumnRefresh](docs/sdks/models/README.md#startcolumnrefresh) - Start column refresh
* [update](docs/sdks/models/README.md#update) - Update model

### [objects](docs/sdks/objects/README.md)

* [listSource](docs/sdks/objects/README.md#listsource) - List source objects

### [tables](docs/sdks/tables/README.md)

* [checkColumnRefresh](docs/sdks/tables/README.md#checkcolumnrefresh) - Check column refresh
* [fetch](docs/sdks/tables/README.md#fetch) - Fetch table
* [startColumnRefresh](docs/sdks/tables/README.md#startcolumnrefresh) - Start column refresh

### [syncRuns](docs/sdks/syncruns/README.md)

* [cancel](docs/sdks/syncruns/README.md#cancel) - Cancel a running sync
* [fetch](docs/sdks/syncruns/README.md#fetch) - Fetch sync run
* [list](docs/sdks/syncruns/README.md#list) - List sync runs

### [syncs](docs/sdks/syncs/README.md)

* [create](docs/sdks/syncs/README.md#create) - Create a new sync
* [delete](docs/sdks/syncs/README.md#delete) - Delete a sync
* [fetch](docs/sdks/syncs/README.md#fetch) - Fetch sync
* [list](docs/sdks/syncs/README.md#list) - List Syncs
* [trigger](docs/sdks/syncs/README.md#trigger) - Trigger a sync run
* [update](docs/sdks/syncs/README.md#update) - Update a sync
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

<!-- Start Error Handling -->
# Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| models.FetchDestinationConnectLinkResponseBody | 404                                            | application/json                               |
| models.SDKError                                | 400-599                                        | */*                                            |


## Example

```typescript
import { FetchDestinationConnectLinkRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const connectLinkId: number = 874373;

  
  let res;
  try {
    res = await sdk.destinationsConnectLinks.fetch(connectLinkId);
  } catch (e) { 
    if (e instanceof models.FetchDestinationConnectLinkResponseBody) {
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
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        serverIdx: 0,
        bearerAuth: "",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetch(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        serverURL: "https://app.getcensus.com/api/v1",
        bearerAuth: "",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetch(serviceName);

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



<!-- Start Authentication -->
# Authentication

## Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:

```typescript
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetch(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

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
