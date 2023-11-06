# SyncRuns
(*.syncRuns*)

### Available Operations

* [cancelSyncRun](#cancelsyncrun) - Cancel a running sync
* [fetchSyncRun](#fetchsyncrun) - Fetch sync run
* [getSyncsSyncIdSyncRuns](#getsyncssyncidsyncruns) - List sync runs

## cancelSyncRun

Use this endpoint to cancel a sync that is actively running.

### Example Usage

```typescript
import { CancelSyncRunRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const syncRunId: number = 609805;

  const res = await sdk.syncRuns.cancelSyncRun(syncRunId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncRunId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the sync run                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.CancelSyncRunResponse](../../models/operations/cancelsyncrunresponse.md)>**


## fetchSyncRun

Retrieve the details of a particular sync run

### Example Usage

```typescript
import { FetchSyncRunRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const syncRunId: number = 612246;

  const res = await sdk.syncRuns.fetchSyncRun(syncRunId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncRunId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the sync run                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchSyncRunResponse](../../models/operations/fetchsyncrunresponse.md)>**


## getSyncsSyncIdSyncRuns

List sync runs

### Example Usage

```typescript
import { GetSyncsSyncIdSyncRunsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const syncId: number = 871833;
const order: Order = Order.Asc;
const page: number = 6968.09;
const perPage: number = 2344.94;

  const res = await sdk.syncRuns.getSyncsSyncIdSyncRuns(syncId, order, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `syncId`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the sync for which to list runs.                                                           |
| `order`                                                                                              | [models.Order](../../models/shared/order.md)                                                         | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.GetSyncsSyncIdSyncRunsResponse](../../models/operations/getsyncssyncidsyncrunsresponse.md)>**

