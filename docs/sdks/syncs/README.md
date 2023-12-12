# Syncs
(*syncs*)

## Overview

Operations related to synchronization.

### Available Operations

* [create](#create) - Create a new sync
* [delete](#delete) - Delete a sync
* [fetch](#fetch) - Fetch sync
* [list](#list) - List Syncs
* [trigger](#trigger) - Trigger a sync run
* [update](#update) - Update a sync

## create

Create a new sync

### Example Usage

```typescript
import {
  SourceAttributesType,
  SyncAttributesFieldNormalization,
  SyncAttributesOperation,
  SyncAttributesScheduleDay,
  SyncAttributesScheduleFrequency,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.syncs.create({
    cronExpression: "* 1 * * *",
    destinationAttributes: {},
    failedRecordNotificationsEnabled: false,
    failedRecordNotificationsThresholdPercent: 10,
    failedRunNotificationsEnabled: false,
    fieldBehavior: "sync_all_properties",
    fieldNormalization: SyncAttributesFieldNormalization.SnakeCase,
    highWaterMarkAttributes: {
      columnName: "updated_at",
      useHighWaterMarkDiffType: true,
    },
    label: "New Signups to Leads",
    mappings: [
      {
        from: "string",
        isPrimaryIdentifier: false,
        to: "string",
      },
      {
        from: "string",
        isPrimaryIdentifier: false,
        to: "string",
      },
      {
        from: "string",
        isPrimaryIdentifier: false,
        to: "string",
      },
    ],
    operation: SyncAttributesOperation.Mirror,
    paused: false,
    scheduleDay: SyncAttributesScheduleDay.Monday,
    scheduleFrequency: SyncAttributesScheduleFrequency.Daily,
    scheduleHour: 10,
    scheduleMinute: 30,
    sourceAttributes: {
      connectionId: 486589,
      object: {
        id: 1543,
        name: "New Signups",
        tableCatalog: "data_mart",
        tableName: "events",
        tableSchema: "publish",
        type: SourceAttributesType.Table,
      },
    },
    triggers: {
      dbtCloud: {
        jobId: "123456",
        projectId: "12345",
      },
      fivetran: {
        jobId: "test_job_id",
        jobName: "test_job_name",
      },
      syncSequence: {
        syncId: 123,
      },
    },
    validateOnly: true,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [models.SyncAttributes](../../models/syncattributes.md)      | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.CreateSyncResponse](../../models/createsyncresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## delete

Deletes the sync with the specified ID.

### Example Usage

```typescript
import { DeleteSyncRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const syncId: number = 545907;

  const res = await sdk.syncs.delete(syncId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncId`                                                     | *number*                                                     | :heavy_check_mark:                                           | ID of the sync                                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteSyncResponse](../../models/deletesyncresponse.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| models.DeleteSyncResponseBody | 404                           | application/json              |
| models.SDKError               | 400-600                       | */*                           |

## fetch

Retrieve the details of a specific sync

### Example Usage

```typescript
import { FetchSyncRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const syncId: number = 874373;

  const res = await sdk.syncs.fetch(syncId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncId`                                                     | *number*                                                     | :heavy_check_mark:                                           | ID of the sync                                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchSyncResponse](../../models/fetchsyncresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.FetchSyncResponseBody | 404                          | application/json             |
| models.SDKError              | 400-600                      | */*                          |

## list

List Syncs

### Example Usage

```typescript
import { ListSyncsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const order: Order = Order.Desc;
const page: number = 998.95;
const perPage: number = 5472.72;

  const res = await sdk.syncs.list(order, page, perPage);

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

**Promise<[models.ListSyncsResponse](../../models/listsyncsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## trigger

Triggers the sync with the specified ID to start a new sync run.

### Example Usage

```typescript
import { TriggerSyncRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const syncId: number = 705908;
const forceFullSync: boolean = false;

  const res = await sdk.syncs.trigger(syncId, forceFullSync);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                         | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `syncId`                                                                                                                          | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | ID of the sync                                                                                                                    |
| `forceFullSync`                                                                                                                   | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | Determines if the sync should be run as a Full Sync. Note that some sync configurations such as Append do not support full syncs. |
| `config`                                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                      | :heavy_minus_sign:                                                                                                                | Available config options for making requests.                                                                                     |


### Response

**Promise<[models.TriggerSyncResponse](../../models/triggersyncresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## update

Update certain configurable attributes of a sync

### Example Usage

```typescript
import {
  DestinationAttributes,
  MappingAttributes,
  ObjectT,
  SourceAttributes,
  SourceAttributesType,
  SyncAttributes,
  SyncAttributesDbtCloud,
  SyncAttributesFieldNormalization,
  SyncAttributesFivetran,
  SyncAttributesHighWaterMarkAttributes,
  SyncAttributesOperation,
  SyncAttributesScheduleDay,
  SyncAttributesScheduleFrequency,
  SyncAttributesSyncSequence,
  SyncAttributesTriggers,
  UpdateSyncRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const syncId: number = 857478;
const syncAttributes: SyncAttributes = {
  cronExpression: "* 1 * * *",
  destinationAttributes: {},
  failedRecordNotificationsEnabled: false,
  failedRecordNotificationsThresholdPercent: 10,
  failedRunNotificationsEnabled: false,
  fieldBehavior: "sync_all_properties",
  fieldNormalization: SyncAttributesFieldNormalization.SnakeCase,
  highWaterMarkAttributes: {
    columnName: "updated_at",
    useHighWaterMarkDiffType: true,
  },
  label: "New Signups to Leads",
  mappings: [
    {
      from: "string",
      isPrimaryIdentifier: false,
      to: "string",
    },
    {
      from: "string",
      isPrimaryIdentifier: false,
      to: "string",
    },
    {
      from: "string",
      isPrimaryIdentifier: false,
      to: "string",
    },
  ],
  operation: SyncAttributesOperation.Mirror,
  paused: false,
  scheduleDay: SyncAttributesScheduleDay.Monday,
  scheduleFrequency: SyncAttributesScheduleFrequency.Daily,
  scheduleHour: 10,
  scheduleMinute: 30,
  sourceAttributes: {
    connectionId: 24555,
    object: {
      id: 1543,
      name: "New Signups",
      tableCatalog: "data_mart",
      tableName: "events",
      tableSchema: "publish",
      type: SourceAttributesType.Model,
    },
  },
  triggers: {
    dbtCloud: {
      jobId: "123456",
      projectId: "12345",
    },
    fivetran: {
      jobId: "test_job_id",
      jobName: "test_job_name",
    },
    syncSequence: {
      syncId: 123,
    },
  },
  validateOnly: true,
};

  const res = await sdk.syncs.update(syncId, syncAttributes);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncId`                                                     | *number*                                                     | :heavy_check_mark:                                           | ID of the sync                                               |
| `syncAttributes`                                             | [models.SyncAttributes](../../models/syncattributes.md)      | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.UpdateSyncResponse](../../models/updatesyncresponse.md)>**
### Errors

| Error Object                  | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| models.UpdateSyncResponseBody | 404                           | application/json              |
| models.SDKError               | 400-600                       | */*                           |
