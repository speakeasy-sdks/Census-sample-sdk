# Models
(*.models*)

## Overview

Data structure or schema definition for data synchronization.

### Available Operations

* [checkColumnRefresh](#checkcolumnrefresh) - Check column refresh
* [create](#create) - Create a new model
* [delete](#delete) - Delete model
* [fetch](#fetch) - Fetch model
* [list](#list) - List models
* [startColumnRefresh](#startcolumnrefresh) - Start column refresh
* [update](#update) - Update model

## checkColumnRefresh

This endpoint checks whether the job refreshing columns for a model has completed.

### Example Usage

```typescript
import { CheckModelsColumnRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 769319;
const refreshKey: number = 162362;
const sourceId: number = 613668;

  const res = await sdk.models.checkColumnRefresh(modelId, refreshKey, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                       | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `modelId`                                                                                                       | *number*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the model                                                                                                 |
| `refreshKey`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | An `id` provided by the `refresh_columns` endpoint, used to check whether the refresh columns job has finished. |
| `sourceId`                                                                                                      | *number*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the source                                                                                                |
| `config`                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                    | :heavy_minus_sign:                                                                                              | Available config options for making requests.                                                                   |


### Response

**Promise<[models.CheckModelsColumnRefreshResponse](../../models/operations/checkmodelscolumnrefreshresponse.md)>**


## create

Create a new model

### Example Usage

```typescript
import { CreateModelRequest, InitialModelAttributes, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const initialModelAttributes: InitialModelAttributes = {
  description: "Users that have signed up for our product in the last week.",
  name: "New App Users",
  query: "SELECT * FROM \"users\"",
};
const sourceId: number = 486589;

  const res = await sdk.models.create(initialModelAttributes, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `initialModelAttributes`                                                       | [models.InitialModelAttributes](../../models/shared/initialmodelattributes.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `sourceId`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | ID of the source                                                               |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[models.CreateModelResponse](../../models/operations/createmodelresponse.md)>**


## delete

Deletes the model specified

### Example Usage

```typescript
import { DeleteModelRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 545907;
const sourceId: number = 841399;

  const res = await sdk.models.delete(modelId, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `modelId`                                                    | *number*                                                     | :heavy_check_mark:                                           | ID of the model                                              |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteModelResponse](../../models/operations/deletemodelresponse.md)>**


## fetch

This endpoint lists information for a given model, including information on what columns it includes.

### Example Usage

```typescript
import { FetchModelRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 874373;
const sourceId: number = 347223;

  const res = await sdk.models.fetch(modelId, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `modelId`                                                    | *number*                                                     | :heavy_check_mark:                                           | ID of the model                                              |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchModelResponse](../../models/operations/fetchmodelresponse.md)>**


## list

List models

### Example Usage

```typescript
import { ListModelsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 768578;
const order: Order = Order.Asc;
const page: number = 5472.72;
const perPage: number = 2576.49;

  const res = await sdk.models.list(sourceId, order, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourceId`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | ID of the source                                                                                     |
| `order`                                                                                              | [models.Order](../../models/shared/order.md)                                                         | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListModelsResponse](../../models/operations/listmodelsresponse.md)>**


## startColumnRefresh

This endpoint queues a job to refresh the list of columns for a model.

### Example Usage

```typescript
import { StartModelsColumnRefreshRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 934723;
const sourceId: number = 644632;

  const res = await sdk.models.startColumnRefresh(modelId, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `modelId`                                                    | *number*                                                     | :heavy_check_mark:                                           | ID of the model                                              |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.StartModelsColumnRefreshResponse](../../models/operations/startmodelscolumnrefreshresponse.md)>**


## update

Update certain values of a specified model

### Example Usage

```typescript
import { ConfigurableModelAttributes, UpdateModelRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 857478;
const sourceId: number = 24555;
const configurableModelAttributes: ConfigurableModelAttributes = {
  description: "Users that have signed up for our product in the last week.",
  name: "New App Users",
  query: "SELECT * FROM \"users\"",
};

  const res = await sdk.models.update(modelId, sourceId, configurableModelAttributes);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `modelId`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | ID of the model                                                                          |
| `sourceId`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | ID of the source                                                                         |
| `configurableModelAttributes`                                                            | [models.ConfigurableModelAttributes](../../models/shared/configurablemodelattributes.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[models.UpdateModelResponse](../../models/operations/updatemodelresponse.md)>**

