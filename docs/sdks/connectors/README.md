# Connectors
(*.connectors*)

### Available Operations

* [fetchConnector](#fetchconnector) - Fetch connector
* [listConnectors](#listconnectors) - List connectors

## fetchConnector

Use this endpoint to fetch the details for a specific types of destination connection that can be created in the current workspace. This is particularly useful for Census Embedded solutions when determining the required values to authorize a new destination connection.

### Example Usage

```typescript
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const serviceName: string = "string";

  const res = await sdk.connectors.fetchConnector(serviceName);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceName`                                                | *string*                                                     | :heavy_check_mark:                                           | Name of the connector to retrieve                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchConnectorResponse](../../models/operations/fetchconnectorresponse.md)>**


## listConnectors

Use this endpoint to list out the types of destination connections that can be created in the current workspace. This is particularly useful for Census Embedded solutions when determining the required values to authorize a new destination connection.

### Example Usage

```typescript
import { ListConnectorsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const order: Order = Order.Asc;
const page: number = 2310.47;
const perPage: number = 4323.88;

  const res = await sdk.connectors.listConnectors(order, page, perPage);


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

**Promise<[models.ListConnectorsResponse](../../models/operations/listconnectorsresponse.md)>**

