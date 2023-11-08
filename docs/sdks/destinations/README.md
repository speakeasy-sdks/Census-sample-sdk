# Destinations
(*destinations*)

## Overview

Target data storage or databases for data synchronization.

### Available Operations

* [checkFieldRefresh](#checkfieldrefresh) - Check fields refresh
* [checkObjectRefresh](#checkobjectrefresh) - Check object refresh
* [create](#create) - Create a new destination
* [delete](#delete) - Delete destination
* [fetch](#fetch) - Fetch destination
* [fetchObject](#fetchobject) - Fetch destination object
* [list](#list) - List destinations
* [listObjects](#listobjects) - List destination objects
* [startFieldRefresh](#startfieldrefresh) - Start fields refresh
* [startObjectRefresh](#startobjectrefresh) - Start object refresh
* [update](#update) - Update destination

## checkFieldRefresh

This endpoint checks whether the job refreshing fields for a destination object has completed.

### Example Usage

```typescript
import { CheckFieldRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 325518;
const objectFullName: number = 26858;
const refreshKey: number = 173894;

  const res = await sdk.destinations.checkFieldRefresh(destinationId, objectFullName, refreshKey);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                     | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                               | *number*                                                                                                      | :heavy_check_mark:                                                                                            | ID of the destination                                                                                         |
| `objectFullName`                                                                                              | *number*                                                                                                      | :heavy_check_mark:                                                                                            | `full_name` of the destination object with an active refresh job                                              |
| `refreshKey`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | An `id` provided by the `refresh_fields` endpoint, used to check whether the refresh fields job has finished. |
| `config`                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                  | :heavy_minus_sign:                                                                                            | Available config options for making requests.                                                                 |


### Response

**Promise<[models.CheckFieldRefreshResponse](../../models/checkfieldrefreshresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## checkObjectRefresh

This endpoint checks whether the job refreshing objects for a destination has completed.

### Example Usage

```typescript
import { CheckObjectRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 275167;
const refreshKey: number = 881363;

  const res = await sdk.destinations.checkObjectRefresh(destinationId, refreshKey);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                       | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                                 | *number*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the destination with an active refresh job                                                                |
| `refreshKey`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | An `id` provided by the `refresh_objects` endpoint, used to check whether the refresh objects job has finished. |
| `config`                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                    | :heavy_minus_sign:                                                                                              | Available config options for making requests.                                                                   |


### Response

**Promise<[models.CheckObjectRefreshResponse](../../models/checkobjectrefreshresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## create

Create a new destination

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });

  const res = await sdk.destinations.create({
    serviceConnection: {
      credentials: {},
      name: "Google Sheets",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                     | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `request`                                                                                     | [models.ConfigurableDestinationAttributes](../../models/configurabledestinationattributes.md) | :heavy_check_mark:                                                                            | The request object to use for the request.                                                    |
| `config`                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                  | :heavy_minus_sign:                                                                            | Available config options for making requests.                                                 |


### Response

**Promise<[models.CreateDestinationResponse](../../models/createdestinationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## delete

Deletes the destination specified

### Example Usage

```typescript
import { DeleteDestinationRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 545907;

  const res = await sdk.destinations.delete(destinationId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `destinationId`                                              | *number*                                                     | :heavy_check_mark:                                           | The ID of the destination to be deleted.                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteDestinationResponse](../../models/deletedestinationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## fetch

Fetch destination

### Example Usage

```typescript
import { FetchDestinationRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 874373;

  const res = await sdk.destinations.fetch(destinationId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `destinationId`                                              | *number*                                                     | :heavy_check_mark:                                           | ID of the destination to retrieve                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchDestinationResponse](../../models/fetchdestinationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## fetchObject

This endpoint lists information for a given object, including information on what fields it includes.

### Example Usage

```typescript
import { FetchDestinationObjectsRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 808221;
const objectFullName: number = 271899;

  const res = await sdk.destinations.fetchObject(destinationId, objectFullName);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `destinationId`                                              | *number*                                                     | :heavy_check_mark:                                           | ID of the destination that owns the object                   |
| `objectFullName`                                             | *number*                                                     | :heavy_check_mark:                                           | `full_name` of the destination object                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchDestinationObjectsResponse](../../models/fetchdestinationobjectsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## list

List destinations

### Example Usage

```typescript
import { ListDestinationsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const order: Order = Order.Desc;
const page: number = 998.95;
const perPage: number = 5472.72;

  const res = await sdk.destinations.list(order, page, perPage);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `order`                                                                                              | [models.Order](../models/order.md)                                                                   | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListDestinationsResponse](../../models/listdestinationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## listObjects

List destination objects

### Example Usage

```typescript
import { ListDestinationObjectsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 62502;
const order: Order = Order.Desc;
const page: number = 8317.9;
const perPage: number = 1994.22;

  const res = await sdk.destinations.listObjects(destinationId, order, page, perPage);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | ID of the destination                                                                                |
| `order`                                                                                              | [models.Order](../models/order.md)                                                                   | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListDestinationObjectsResponse](../../models/listdestinationobjectsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## startFieldRefresh

This endpoint queues a job to refresh the list of fields for a given destination object.

### Example Usage

```typescript
import { StartFieldRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 987417;
const objectFullName: number = 472220;

  const res = await sdk.destinations.startFieldRefresh(destinationId, objectFullName);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `destinationId`                                              | *number*                                                     | :heavy_check_mark:                                           | ID of the destination to update                              |
| `objectFullName`                                             | *number*                                                     | :heavy_check_mark:                                           | `full_name` of the destination object                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.StartFieldRefreshResponse](../../models/startfieldrefreshresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## startObjectRefresh

This endpoint queues a job to refresh the list of objects for a destination.

### Example Usage

```typescript
import { StartObjectRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 225371;

  const res = await sdk.destinations.startObjectRefresh(destinationId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `destinationId`                                              | *number*                                                     | :heavy_check_mark:                                           | ID of the destination to update                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.StartObjectRefreshResponse](../../models/startobjectrefreshresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## update

Update certain values of a destination

### Example Usage

```typescript
import {
  ConfigurableDestinationAttributes,
  Credentials,
  ServiceConnection,
  UpdateDestinationRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 857478;
const configurableDestinationAttributes: ConfigurableDestinationAttributes = {
  serviceConnection: {
    credentials: {},
    name: "Google Sheets",
  },
};

  const res = await sdk.destinations.update(destinationId, configurableDestinationAttributes);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `destinationId`                                                                            | *number*                                                                                   | :heavy_check_mark:                                                                         | ID of the destination to update                                                            |
| `configurableDestinationAttributes`                                                        | [models.ConfigurableDestinationAttributes](../models/configurabledestinationattributes.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[models.UpdateDestinationResponse](../../models/updatedestinationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |
