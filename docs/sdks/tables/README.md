# Tables
(*.tables*)

## Overview

Containers for storing data within a destination, often part of data models.

### Available Operations

* [checkColumnRefresh](#checkcolumnrefresh) - Check column refresh
* [fetch](#fetch) - Fetch table
* [startColumnRefresh](#startcolumnrefresh) - Start column refresh

## checkColumnRefresh

This endpoint checks whether the job refreshing columns for a table has completed.

### Example Usage

```typescript
import { CheckTablesColumnRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const refreshKey: number = 769319;
const sourceId: number = 162362;
const tableId: number = 613668;

  const res = await sdk.tables.checkColumnRefresh(refreshKey, sourceId, tableId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                       | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `refreshKey`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | An `id` provided by the `refresh_columns` endpoint, used to check whether the refresh columns job has finished. |
| `sourceId`                                                                                                      | *number*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the source                                                                                                |
| `tableId`                                                                                                       | *number*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the table                                                                                                 |
| `config`                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                    | :heavy_minus_sign:                                                                                              | Available config options for making requests.                                                                   |


### Response

**Promise<[models.CheckTablesColumnRefreshResponse](../../models/operations/checktablescolumnrefreshresponse.md)>**


## fetch

This endpoint lists information for a given table, including information on what columns it includes.

### Example Usage

```typescript
import { FetchTableRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 874373;
const tableId: number = 347223;

  const res = await sdk.tables.fetch(sourceId, tableId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `tableId`                                                    | *number*                                                     | :heavy_check_mark:                                           | ID of the table                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchTableResponse](../../models/operations/fetchtableresponse.md)>**


## startColumnRefresh

This endpoint queues a job to refresh the list of columns for a table.

### Example Usage

```typescript
import { StartTablesColumnRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 934723;
const tableId: number = 644632;

  const res = await sdk.tables.startColumnRefresh(sourceId, tableId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `tableId`                                                    | *number*                                                     | :heavy_check_mark:                                           | ID of the table                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.StartTablesColumnRefreshResponse](../../models/operations/starttablescolumnrefreshresponse.md)>**

