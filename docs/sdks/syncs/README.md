# Syncs
(*.syncs*)

### Available Operations

* [createSync](#createsync) - Create a new sync
* [deleteSync](#deletesync) - Delete a sync
* [fetchSync](#fetchsync) - Fetch sync
* [getSyncs](#getsyncs) - List Syncs
* [triggerSync](#triggersync) - Trigger a sync run
* [updateSync](#updatesync) - Update a sync

## createSync

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

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });

  const res = await sdk.syncs.createSync({
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
      connectionId: 863923,
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
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [models.SyncAttributes](../../models/shared/syncattributes.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[models.CreateSyncResponse](../../models/operations/createsyncresponse.md)>**


## deleteSync

Deletes the sync with the specified ID.

### Example Usage

```typescript
import { DeleteSyncRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const syncId: number = 269738;

  const res = await sdk.syncs.deleteSync(syncId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncId`                                                     | *number*                                                     | :heavy_check_mark:                                           | ID of the sync                                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteSyncResponse](../../models/operations/deletesyncresponse.md)>**


## fetchSync

Retrieve the details of a specific sync

### Example Usage

```typescript
import { FetchSyncRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const syncId: number = 798809;

  const res = await sdk.syncs.fetchSync(syncId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `syncId`                                                     | *number*                                                     | :heavy_check_mark:                                           | ID of the sync                                               |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchSyncResponse](../../models/operations/fetchsyncresponse.md)>**


## getSyncs

List Syncs

### Example Usage

```typescript
import { GetSyncsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const order: Order = Order.Asc;
const page: number = 9325.36;
const perPage: number = 7147.14;

  const res = await sdk.syncs.getSyncs(order, page, perPage);


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

**Promise<[models.GetSyncsResponse](../../models/operations/getsyncsresponse.md)>**


## triggerSync

Triggers the sync with the specified ID to start a new sync run.

### Example Usage

```typescript
import { TriggerSyncRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const syncId: number = 781383;
const forceFullSync: boolean = false;

  const res = await sdk.syncs.triggerSync(syncId, forceFullSync);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                         | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `syncId`                                                                                                                          | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | ID of the sync                                                                                                                    |
| `forceFullSync`                                                                                                                   | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | Determines if the sync should be run as a Full Sync. Note that some sync configurations such as Append do not support full syncs. |
| `config`                                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                      | :heavy_minus_sign:                                                                                                                | Available config options for making requests.                                                                                     |


### Response

**Promise<[models.TriggerSyncResponse](../../models/operations/triggersyncresponse.md)>**


## updateSync

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

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const syncId: number = 341390;
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
    connectionId: 434336,
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

  const res = await sdk.syncs.updateSync(syncId, syncAttributes);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `syncId`                                                       | *number*                                                       | :heavy_check_mark:                                             | ID of the sync                                                 |
| `syncAttributes`                                               | [models.SyncAttributes](../../models/shared/syncattributes.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[models.UpdateSyncResponse](../../models/operations/updatesyncresponse.md)>**

