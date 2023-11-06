# Tables
(*.tables*)

### Available Operations

* [getSourcesSourceIdTablesTableId](#getsourcessourceidtablestableid) - Fetch table
* [getSourcesSourceIdTablesTableIdRefreshColumnsStatus](#getsourcessourceidtablestableidrefreshcolumnsstatus) - Check column refresh
* [postSourcesSourceIdTablesTableIdRefreshColumns](#postsourcessourceidtablestableidrefreshcolumns) - Start column refresh

## getSourcesSourceIdTablesTableId

This endpoint lists information for a given table, including information on what columns it includes.

### Example Usage

```typescript
import { GetSourcesSourceIdTablesTableIdRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 859056;
const tableId: number = 878261;

  const res = await sdk.tables.getSourcesSourceIdTablesTableId(sourceId, tableId);


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

**Promise<[models.GetSourcesSourceIdTablesTableIdResponse](../../models/operations/getsourcessourceidtablestableidresponse.md)>**


## getSourcesSourceIdTablesTableIdRefreshColumnsStatus

This endpoint checks whether the job refreshing columns for a table has completed.

### Example Usage

```typescript
import {
  GetSourcesSourceIdTablesTableIdRefreshColumnsStatusRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const refreshKey: number = 30811;
const sourceId: number = 147866;
const tableId: number = 966838;

  const res = await sdk.tables.getSourcesSourceIdTablesTableIdRefreshColumnsStatus(refreshKey, sourceId, tableId);


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

**Promise<[models.GetSourcesSourceIdTablesTableIdRefreshColumnsStatusResponse](../../models/operations/getsourcessourceidtablestableidrefreshcolumnsstatusresponse.md)>**


## postSourcesSourceIdTablesTableIdRefreshColumns

This endpoint queues a job to refresh the list of columns for a table.

### Example Usage

```typescript
import { PostSourcesSourceIdTablesTableIdRefreshColumnsRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 778925;
const tableId: number = 698503;

  const res = await sdk.tables.postSourcesSourceIdTablesTableIdRefreshColumns(sourceId, tableId);


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

**Promise<[models.PostSourcesSourceIdTablesTableIdRefreshColumnsResponse](../../models/operations/postsourcessourceidtablestableidrefreshcolumnsresponse.md)>**

