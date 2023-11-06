# Sources
(*.sources*)

### Available Operations

* [createSource](#createsource) - Create a new source
* [deleteSource](#deletesource) - Delete source
* [getSourcesSourceId](#getsourcessourceid) - Fetch source
* [getSourcesSourceIdRefreshTablesStatus](#getsourcessourceidrefreshtablesstatus) - Check table refresh
* [listSources](#listsources) - List sources
* [patchSourcesSourceId](#patchsourcessourceid) - Update source
* [postSourcesSourceIdRefreshTables](#postsourcessourceidrefreshtables) - Start table refresh

## createSource

Create a new source

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });

  const res = await sdk.sources.createSource({
    connection: {
      type: "[\"snowflake\",\"redshift\",\"big_query\"]",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [models.InitialSourceAttributes](../../models/shared/initialsourceattributes.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[models.CreateSourceResponse](../../models/operations/createsourceresponse.md)>**


## deleteSource

Deletes the source specified

### Example Usage

```typescript
import { DeleteSourceRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 13025;

  const res = await sdk.sources.deleteSource(sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | The ID of the source to be deleted.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteSourceResponse](../../models/operations/deletesourceresponse.md)>**


## getSourcesSourceId

Fetch source

### Example Usage

```typescript
import { GetSourcesSourceIdRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 220863;

  const res = await sdk.sources.getSourcesSourceId(sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source to retrieve                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.GetSourcesSourceIdResponse](../../models/operations/getsourcessourceidresponse.md)>**


## getSourcesSourceIdRefreshTablesStatus

This endpoint checks whether the job refreshing tables for a source has completed.

### Example Usage

```typescript
import { GetSourcesSourceIdRefreshTablesStatusRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const refreshKey: number = 716894;
const sourceId: number = 868878;

  const res = await sdk.sources.getSourcesSourceIdRefreshTablesStatus(refreshKey, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                     | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `refreshKey`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | An `id` provided by the `refresh_tables` endpoint, used to check whether the refresh tables job has finished. |
| `sourceId`                                                                                                    | *number*                                                                                                      | :heavy_check_mark:                                                                                            | ID of the source with an active refresh job                                                                   |
| `config`                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                  | :heavy_minus_sign:                                                                                            | Available config options for making requests.                                                                 |


### Response

**Promise<[models.GetSourcesSourceIdRefreshTablesStatusResponse](../../models/operations/getsourcessourceidrefreshtablesstatusresponse.md)>**


## listSources

List sources

### Example Usage

```typescript
import { ListSourcesRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const order: Order = Order.Asc;
const page: number = 2845.64;
const perPage: number = 8550.6;

  const res = await sdk.sources.listSources(order, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `order`                                                                                              | [models.Order](../../models/shared/order.md)                                                         | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListSourcesResponse](../../models/operations/listsourcesresponse.md)>**


## patchSourcesSourceId

Update certain values of a source

### Example Usage

```typescript
import {
  ConfigurableSourceAttributes,
  Connection,
  PatchSourcesSourceIdRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 793790;
const configurableSourceAttributes: ConfigurableSourceAttributes = {
  connection: {
    credentials: {
      "password": "string",
      "database": "string",
      "hostname": "string",
      "port": "string",
      "user": "string",
    },
    label: "Acme Inc. Snowflake",
  },
};

  const res = await sdk.sources.patchSourcesSourceId(sourceId, configurableSourceAttributes);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `sourceId`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | ID of the source to update                                                                 |
| `configurableSourceAttributes`                                                             | [models.ConfigurableSourceAttributes](../../models/shared/configurablesourceattributes.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[models.PatchSourcesSourceIdResponse](../../models/operations/patchsourcessourceidresponse.md)>**


## postSourcesSourceIdRefreshTables

This endpoint queues a job to refresh the list of tables for a source.

### Example Usage

```typescript
import { PostSourcesSourceIdRefreshTablesRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 641743;

  const res = await sdk.sources.postSourcesSourceIdRefreshTables(sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source to update                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.PostSourcesSourceIdRefreshTablesResponse](../../models/operations/postsourcessourceidrefreshtablesresponse.md)>**

