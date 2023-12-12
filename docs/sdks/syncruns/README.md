# SyncRuns
(*syncRuns*)

### Available Operations

* [cancel](#cancel) - Cancel a running sync
* [fetch](#fetch) - Fetch sync run
* [list](#list) - List sync runs

## cancel

Use this endpoint to cancel a sync that is actively running.

### Example Usage

```typescript
import { CancelSyncRunRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const syncRunId: number = 24812;

  const res = await sdk.syncRuns.cancel(syncRunId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncRunId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the sync run                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.CancelSyncRunResponse](../../models/cancelsyncrunresponse.md)>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| models.CancelSyncRunResponseBody | 404                              | application/json                 |
| models.SDKError                  | 400-600                          | */*                              |

## fetch

Retrieve the details of a particular sync run

### Example Usage

```typescript
import { FetchSyncRunRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const syncRunId: number = 874373;

  const res = await sdk.syncRuns.fetch(syncRunId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncRunId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the sync run                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchSyncRunResponse](../../models/fetchsyncrunresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.FetchSyncRunResponseBody | 404                             | application/json                |
| models.SDKError                 | 400-600                         | */*                             |

## list

List sync runs

### Example Usage

```typescript
import { ListSyncRunsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const syncId: number = 768578;
const order: Order = Order.Asc;
const page: number = 5472.72;
const perPage: number = 2576.49;

  const res = await sdk.syncRuns.list(syncId, order, page, perPage);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `syncId`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the sync for which to list runs.                                                           |
| `order`                                                                                              | [models.Order](../../models/order.md)                                                                | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListSyncRunsResponse](../../models/listsyncrunsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |
