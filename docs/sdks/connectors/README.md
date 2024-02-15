# Connectors
(*connectors*)

## Overview

Software components facilitating data connections and transfers between systems.

### Available Operations

* [fetch](#fetch) - Fetch connector
* [list](#list) - List connectors

## fetch

Use this endpoint to fetch the details for a specific types of destination connection that can be created in the current workspace. This is particularly useful for Census Embedded solutions when determining the required values to authorize a new destination connection.

### Example Usage

```typescript
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const serviceName: string = "<value>";

  const res = await sdk.connectors.fetch(serviceName);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceName`                                                | *string*                                                     | :heavy_check_mark:                                           | Name of the connector to retrieve                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchConnectorResponse](../../models/fetchconnectorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## list

Use this endpoint to list out the types of destination connections that can be created in the current workspace. This is particularly useful for Census Embedded solutions when determining the required values to authorize a new destination connection.

### Example Usage

```typescript
import { ListConnectorsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const order: Order = Order.Desc;
const page: number = 998.95;
const perPage: number = 5472.72;

  const res = await sdk.connectors.list(order, page, perPage);

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

**Promise<[models.ListConnectorsResponse](../../models/listconnectorsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |
