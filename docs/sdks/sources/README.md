# Sources
(*.sources*)

## Overview

Data repositories where the data originates from.

### Available Operations

* [check](#check) - Check table refresh
* [create](#create) - Create a new source
* [delete](#delete) - Delete source
* [fetch](#fetch) - Fetch source
* [list](#list) - List sources
* [start](#start) - Start table refresh
* [update](#update) - Update source

## check

This endpoint checks whether the job refreshing tables for a source has completed.

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { CheckTableRefreshRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const refreshKey: number = 935464;
const sourceId: number = 38270;

  const res = await sdk.sources.check(refreshKey, sourceId);


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

**Promise<[operations.CheckTableRefreshResponse](../../models/operations/checktablerefreshresponse.md)>**


## create

Create a new source

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });

  const res = await sdk.sources.create({
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [components.InitialSourceAttributes](../../models/shared/initialsourceattributes.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateSourceResponse](../../models/operations/createsourceresponse.md)>**


## delete

Deletes the source specified

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { DeleteSourceRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 545907;

  const res = await sdk.sources.delete(sourceId);


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

**Promise<[operations.DeleteSourceResponse](../../models/operations/deletesourceresponse.md)>**


## fetch

Fetch source

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { FetchSourceRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 874373;

  const res = await sdk.sources.fetch(sourceId);


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

**Promise<[operations.FetchSourceResponse](../../models/operations/fetchsourceresponse.md)>**


## list

List sources

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { Order } from "Workspace-Management-API/dist/models/components";
import { ListSourcesRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const order: Order = Order.Desc;
const page: number = 998.95;
const perPage: number = 5472.72;

  const res = await sdk.sources.list(order, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `order`                                                                                              | [components.Order](../../models/shared/order.md)                                                     | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListSourcesResponse](../../models/operations/listsourcesresponse.md)>**


## start

This endpoint queues a job to refresh the list of tables for a source.

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { StartTableRefreshRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 50099;

  const res = await sdk.sources.start(sourceId);


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

**Promise<[operations.StartTableRefreshResponse](../../models/operations/starttablerefreshresponse.md)>**


## update

Update certain values of a source

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { ConfigurableSourceAttributes, Connection } from "Workspace-Management-API/dist/models/components";
import { UpdateSourceRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 857478;
const configurableSourceAttributes: ConfigurableSourceAttributes = {
  connection: {
    credentials: {
      "port": "string",
      "user": "string",
      "password": "string",
      "database": "string",
      "hostname": "string",
    },
    label: "Acme Inc. Snowflake",
  },
};

  const res = await sdk.sources.update(sourceId, configurableSourceAttributes);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sourceId`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | ID of the source to update                                                                     |
| `configurableSourceAttributes`                                                                 | [components.ConfigurableSourceAttributes](../../models/shared/configurablesourceattributes.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateSourceResponse](../../models/operations/updatesourceresponse.md)>**

