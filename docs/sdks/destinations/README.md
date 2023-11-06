# Destinations
(*.destinations*)

### Available Operations

* [createDestination](#createdestination) - Create a new destination
* [deleteDestination](#deletedestination) - Delete destination
* [fetchDestinationObject](#fetchdestinationobject) - Fetch destination object
* [getDestinationsDestinationId](#getdestinationsdestinationid) - Fetch destination
* [getDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsStatus](#getdestinationsdestinationidobjectsobjectfullnamerefreshfieldsstatus) - Check fields refresh
* [getDestinationsDestinationIdRefreshObjectsStatus](#getdestinationsdestinationidrefreshobjectsstatus) - Check object refresh
* [listDestinationObjects](#listdestinationobjects) - List destination objects
* [listDestinations](#listdestinations) - List destinations
* [patchDestinationsDestinationId](#patchdestinationsdestinationid) - Update destination
* [postDestinationsDestinationIdObjectsObjectFullNameRefreshFields](#postdestinationsdestinationidobjectsobjectfullnamerefreshfields) - Start fields refresh
* [postDestinationsDestinationIdRefreshObjects](#postdestinationsdestinationidrefreshobjects) - Start object refresh

## createDestination

Create a new destination

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });

  const res = await sdk.destinations.createDestination({
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [models.ConfigurableDestinationAttributes](../../models/shared/configurabledestinationattributes.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.CreateDestinationResponse](../../models/operations/createdestinationresponse.md)>**


## deleteDestination

Deletes the destination specified

### Example Usage

```typescript
import { DeleteDestinationRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 361536;

  const res = await sdk.destinations.deleteDestination(destinationId);


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

**Promise<[models.DeleteDestinationResponse](../../models/operations/deletedestinationresponse.md)>**


## fetchDestinationObject

This endpoint lists information for a given object, including information on what fields it includes.

### Example Usage

```typescript
import { FetchDestinationObjectRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 150073;
const objectFullName: number = 651441;

  const res = await sdk.destinations.fetchDestinationObject(destinationId, objectFullName);


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

**Promise<[models.FetchDestinationObjectResponse](../../models/operations/fetchdestinationobjectresponse.md)>**


## getDestinationsDestinationId

Fetch destination

### Example Usage

```typescript
import { GetDestinationsDestinationIdRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 267761;

  const res = await sdk.destinations.getDestinationsDestinationId(destinationId);


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

**Promise<[models.GetDestinationsDestinationIdResponse](../../models/operations/getdestinationsdestinationidresponse.md)>**


## getDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsStatus

This endpoint checks whether the job refreshing fields for a destination object has completed.

### Example Usage

```typescript
import {
  GetDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsStatusRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 997322;
const objectFullName: number = 344497;
const refreshKey: number = 283677;

  const res = await sdk.destinations.getDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsStatus(destinationId, objectFullName, refreshKey);


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

**Promise<[models.GetDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsStatusResponse](../../models/operations/getdestinationsdestinationidobjectsobjectfullnamerefreshfieldsstatusresponse.md)>**


## getDestinationsDestinationIdRefreshObjectsStatus

This endpoint checks whether the job refreshing objects for a destination has completed.

### Example Usage

```typescript
import { GetDestinationsDestinationIdRefreshObjectsStatusRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 113612;
const refreshKey: number = 843295;

  const res = await sdk.destinations.getDestinationsDestinationIdRefreshObjectsStatus(destinationId, refreshKey);


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

**Promise<[models.GetDestinationsDestinationIdRefreshObjectsStatusResponse](../../models/operations/getdestinationsdestinationidrefreshobjectsstatusresponse.md)>**


## listDestinationObjects

List destination objects

### Example Usage

```typescript
import { ListDestinationObjectsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 926774;
const order: Order = Order.Asc;
const page: number = 7248.92;
const perPage: number = 7922.06;

  const res = await sdk.destinations.listDestinationObjects(destinationId, order, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | ID of the destination                                                                                |
| `order`                                                                                              | [models.Order](../../models/shared/order.md)                                                         | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListDestinationObjectsResponse](../../models/operations/listdestinationobjectsresponse.md)>**


## listDestinations

List destinations

### Example Usage

```typescript
import { ListDestinationsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const order: Order = Order.Desc;
const page: number = 1259.99;
const perPage: number = 6072.89;

  const res = await sdk.destinations.listDestinations(order, page, perPage);


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

**Promise<[models.ListDestinationsResponse](../../models/operations/listdestinationsresponse.md)>**


## patchDestinationsDestinationId

Update certain values of a destination

### Example Usage

```typescript
import {
  ConfigurableDestinationAttributes,
  Credentials,
  PatchDestinationsDestinationIdRequest,
  ServiceConnection,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 3435;
const configurableDestinationAttributes: ConfigurableDestinationAttributes = {
  serviceConnection: {
    credentials: {},
    name: "Google Sheets",
  },
};

  const res = await sdk.destinations.patchDestinationsDestinationId(destinationId, configurableDestinationAttributes);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | ID of the destination to update                                                                      |
| `configurableDestinationAttributes`                                                                  | [models.ConfigurableDestinationAttributes](../../models/shared/configurabledestinationattributes.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.PatchDestinationsDestinationIdResponse](../../models/operations/patchdestinationsdestinationidresponse.md)>**


## postDestinationsDestinationIdObjectsObjectFullNameRefreshFields

This endpoint queues a job to refresh the list of fields for a given destination object.

### Example Usage

```typescript
import {
  PostDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 664130;
const objectFullName: number = 348782;

  const res = await sdk.destinations.postDestinationsDestinationIdObjectsObjectFullNameRefreshFields(destinationId, objectFullName);


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

**Promise<[models.PostDestinationsDestinationIdObjectsObjectFullNameRefreshFieldsResponse](../../models/operations/postdestinationsdestinationidobjectsobjectfullnamerefreshfieldsresponse.md)>**


## postDestinationsDestinationIdRefreshObjects

This endpoint queues a job to refresh the list of objects for a destination.

### Example Usage

```typescript
import { PostDestinationsDestinationIdRefreshObjectsRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const destinationId: number = 453680;

  const res = await sdk.destinations.postDestinationsDestinationIdRefreshObjects(destinationId);


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

**Promise<[models.PostDestinationsDestinationIdRefreshObjectsResponse](../../models/operations/postdestinationsdestinationidrefreshobjectsresponse.md)>**

