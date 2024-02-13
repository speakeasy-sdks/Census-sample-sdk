# Sources
(*sources*)

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
import { CheckTableRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const refreshKey: number = 935464;
const sourceId: number = 38270;

  const res = await sdk.sources.check(refreshKey, sourceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                     | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `refreshKey`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | An `id` provided by the `refresh_tables` endpoint, used to check whether the refresh tables job has finished. |
| `sourceId`                                                                                                    | *number*                                                                                                      | :heavy_check_mark:                                                                                            | ID of the source with an active refresh job                                                                   |
| `config`                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                  | :heavy_minus_sign:                                                                                            | Available config options for making requests.                                                                 |


### Response

**Promise<[models.CheckTableRefreshResponse](../../models/checktablerefreshresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## create

Create a new source

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.sources.create({
    connection: {
      type: "[\"snowflake\",\"redshift\",\"big_query\"]",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `request`                                                                 | [models.InitialSourceAttributes](../../models/initialsourceattributes.md) | :heavy_check_mark:                                                        | The request object to use for the request.                                |
| `config`                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)              | :heavy_minus_sign:                                                        | Available config options for making requests.                             |


### Response

**Promise<[models.CreateSourceResponse](../../models/createsourceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## delete

Deletes the source specified

### Example Usage

```typescript
import { DeleteSourceRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const sourceId: number = 545907;

  const res = await sdk.sources.delete(sourceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | The ID of the source to be deleted.                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteSourceResponse](../../models/deletesourceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## fetch

Fetch source

### Example Usage

```typescript
import { FetchSourceRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const sourceId: number = 874373;

  const res = await sdk.sources.fetch(sourceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source to retrieve                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchSourceResponse](../../models/fetchsourceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## list

List sources

### Example Usage

```typescript
import { ListSourcesRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const order: Order = Order.Desc;
const page: number = 998.95;
const perPage: number = 5472.72;

  const res = await sdk.sources.list(order, page, perPage);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `order`                                                                                              | [models.Order](../../models/order.md)                                                                | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListSourcesResponse](../../models/listsourcesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## start

This endpoint queues a job to refresh the list of tables for a source.

### Example Usage

```typescript
import { StartTableRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const sourceId: number = 50099;

  const res = await sdk.sources.start(sourceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source to update                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.StartTableRefreshResponse](../../models/starttablerefreshresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## update

Update certain values of a source

### Example Usage

```typescript
import {
  ConfigurableSourceAttributes,
  Connection,
  UpdateSourceRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const sourceId: number = 857478;
const configurableSourceAttributes: ConfigurableSourceAttributes = {
  connection: {
    credentials: {
      "hostname": "<instance>.<region>.redshift.amazonaws.com,",
      "port": "5439,",
      "user": "redshift_user,",
      "password": "redshift_password,",
      "database": "demo",
    },
    label: "Acme Inc. Snowflake",
  },
};

  const res = await sdk.sources.update(sourceId, configurableSourceAttributes);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                           | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `sourceId`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | ID of the source to update                                                          |
| `configurableSourceAttributes`                                                      | [models.ConfigurableSourceAttributes](../../models/configurablesourceattributes.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `config`                                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                        | :heavy_minus_sign:                                                                  | Available config options for making requests.                                       |


### Response

**Promise<[models.UpdateSourceResponse](../../models/updatesourceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |
