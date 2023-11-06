# DestinationConnectLinks
(*.destinationConnectLinks*)

### Available Operations

* [createDestinationConnectLink](#createdestinationconnectlink) - Create a new destination connect link
* [fetchDestinationConnectLink](#fetchdestinationconnectlink) - Fetch destination connect link
* [listDestinationConnectLinkTypes](#listdestinationconnectlinktypes) - List destination connect link types
* [listDestinationConnectLinks](#listdestinationconnectlinks) - List destination connect links
* [revokeDestinationConnectLink](#revokedestinationconnectlink) - Revoke a destination connect link

## createDestinationConnectLink

Create a new destination connect link

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });

  const res = await sdk.destinationConnectLinks.createDestinationConnectLink({
    type: "hubspot",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [components.InitialDestinationConnectLinkAttributes](../../models/shared/initialdestinationconnectlinkattributes.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateDestinationConnectLinkResponse](../../models/operations/createdestinationconnectlinkresponse.md)>**


## fetchDestinationConnectLink

Retrieve the details of a specific destination connect link

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { FetchDestinationConnectLinkRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const connectLinkId: number = 717794;

  const res = await sdk.destinationConnectLinks.fetchDestinationConnectLink(connectLinkId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connectLinkId`                                              | *number*                                                     | :heavy_check_mark:                                           | ID of the connect link                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FetchDestinationConnectLinkResponse](../../models/operations/fetchdestinationconnectlinkresponse.md)>**


## listDestinationConnectLinkTypes

This endpoint returns a list of all the types of supported destination connect links. Note that there may be a few missing that are available via the connectors metadata API. If you wish to use one of these, please reach out to us.

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });

  const res = await sdk.destinationConnectLinks.listDestinationConnectLinkTypes();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListDestinationConnectLinkTypesResponse](../../models/operations/listdestinationconnectlinktypesresponse.md)>**


## listDestinationConnectLinks

This endpoint returns details for all active and expired connect links in the current workspace.

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { Order } from "Workspace-Management-API/dist/models/components";
import { ListDestinationConnectLinksRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const order: Order = Order.Asc;
const page: number = 433;
const perPage: number = 9162.74;

  const res = await sdk.destinationConnectLinks.listDestinationConnectLinks(order, page, perPage);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `order`                                                                                              | [components.Order](../../models/shared/order.md)                                                     | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListDestinationConnectLinksResponse](../../models/operations/listdestinationconnectlinksresponse.md)>**


## revokeDestinationConnectLink

Revokes a destination connect link so that it can no longer be used.

### Example Usage

```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { RevokeDestinationConnectLinkRequest } from "Workspace-Management-API/dist/models/operations";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const connectLinkId: number = 428305;

  const res = await sdk.destinationConnectLinks.revokeDestinationConnectLink(connectLinkId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connectLinkId`                                              | *number*                                                     | :heavy_check_mark:                                           | ID of the connect link                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RevokeDestinationConnectLinkResponse](../../models/operations/revokedestinationconnectlinkresponse.md)>**

