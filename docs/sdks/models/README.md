# Models
(*.models*)

### Available Operations

* [createModel](#createmodel) - Create a new model
* [deleteModel](#deletemodel) - Delete model
* [getSourcesSourceIdModelsModelId](#getsourcessourceidmodelsmodelid) - Fetch model
* [getSourcesSourceIdModelsModelIdRefreshColumnsStatus](#getsourcessourceidmodelsmodelidrefreshcolumnsstatus) - Check column refresh
* [listModels](#listmodels) - List models
* [patchSourcesSourceIdModelsModelId](#patchsourcessourceidmodelsmodelid) - Update model
* [postSourcesSourceIdModelsModelIdRefreshColumns](#postsourcessourceidmodelsmodelidrefreshcolumns) - Start column refresh

## createModel

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
const sourceId: number = 103039;

  const res = await sdk.models.createModel(initialModelAttributes, sourceId);


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


## deleteModel

Deletes the model specified

### Example Usage

```typescript
import { DeleteModelRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 392218;
const sourceId: number = 543398;

  const res = await sdk.models.deleteModel(modelId, sourceId);


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


## getSourcesSourceIdModelsModelId

This endpoint lists information for a given model, including information on what columns it includes.

### Example Usage

```typescript
import { GetSourcesSourceIdModelsModelIdRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 312457;
const sourceId: number = 433364;

  const res = await sdk.models.getSourcesSourceIdModelsModelId(modelId, sourceId);


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

**Promise<[models.GetSourcesSourceIdModelsModelIdResponse](../../models/operations/getsourcessourceidmodelsmodelidresponse.md)>**


## getSourcesSourceIdModelsModelIdRefreshColumnsStatus

This endpoint checks whether the job refreshing columns for a model has completed.

### Example Usage

```typescript
import {
  GetSourcesSourceIdModelsModelIdRefreshColumnsStatusRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 48326;
const refreshKey: number = 978770;
const sourceId: number = 275841;

  const res = await sdk.models.getSourcesSourceIdModelsModelIdRefreshColumnsStatus(modelId, refreshKey, sourceId);


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

**Promise<[models.GetSourcesSourceIdModelsModelIdRefreshColumnsStatusResponse](../../models/operations/getsourcessourceidmodelsmodelidrefreshcolumnsstatusresponse.md)>**


## listModels

List models

### Example Usage

```typescript
import { ListModelsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 381730;
const order: Order = Order.Desc;
const page: number = 1651.18;
const perPage: number = 9589.46;

  const res = await sdk.models.listModels(sourceId, order, page, perPage);


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


## patchSourcesSourceIdModelsModelId

Update certain values of a specified model

### Example Usage

```typescript
import {
  ConfigurableModelAttributes,
  PatchSourcesSourceIdModelsModelIdRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 516851;
const sourceId: number = 587814;
const configurableModelAttributes: ConfigurableModelAttributes = {
  description: "Users that have signed up for our product in the last week.",
  name: "New App Users",
  query: "SELECT * FROM \"users\"",
};

  const res = await sdk.models.patchSourcesSourceIdModelsModelId(modelId, sourceId, configurableModelAttributes);


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

**Promise<[models.PatchSourcesSourceIdModelsModelIdResponse](../../models/operations/patchsourcessourceidmodelsmodelidresponse.md)>**


## postSourcesSourceIdModelsModelIdRefreshColumns

This endpoint queues a job to refresh the list of columns for a model.

### Example Usage

```typescript
import { PostSourcesSourceIdModelsModelIdRefreshColumnsRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const modelId: number = 985043;
const sourceId: number = 337899;

  const res = await sdk.models.postSourcesSourceIdModelsModelIdRefreshColumns(modelId, sourceId);


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

**Promise<[models.PostSourcesSourceIdModelsModelIdRefreshColumnsResponse](../../models/operations/postsourcessourceidmodelsmodelidrefreshcolumnsresponse.md)>**

