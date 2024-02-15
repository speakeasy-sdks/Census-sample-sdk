# Segments
(*segments*)

## Overview

Partitions or groups of data within sources or destinations.

### Available Operations

* [create](#create) - Create a new segment
* [delete](#delete) - Delete Segment
* [fetch](#fetch) - Fetch segment
* [list](#list) - List segments
* [update](#update) - Update segment

## create

Create a new segment

### Example Usage

```typescript
import { CreateSegmentRequest, InitialSegmentAttributes, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const initialSegmentAttributes: InitialSegmentAttributes = {
  businessObjectId: 486589,
  molecules: [
    "<value>",
  ],
  name: "priority accounts",
};
const sourceId: number = 489382;

  const res = await sdk.segments.create(initialSegmentAttributes, sourceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                   | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `initialSegmentAttributes`                                                  | [models.InitialSegmentAttributes](../../models/initialsegmentattributes.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `sourceId`                                                                  | *number*                                                                    | :heavy_check_mark:                                                          | ID of the source                                                            |
| `config`                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                | :heavy_minus_sign:                                                          | Available config options for making requests.                               |


### Response

**Promise<[models.CreateSegmentResponse](../../models/createsegmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## delete

Deletes the segment specified

### Example Usage

```typescript
import { DeleteSegmentRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const segmentId: number = 545907;
const sourceId: number = 841399;

  const res = await sdk.segments.delete(segmentId, sourceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `segmentId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the segment                                            |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteSegmentResponse](../../models/deletesegmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## fetch

This endpoint lists information for a given segment, including information on its molecules (our data structure for recursive constraints).

### Example Usage

```typescript
import { FetchSegmentRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const segmentId: number = 874373;
const sourceId: number = 347223;

  const res = await sdk.segments.fetch(segmentId, sourceId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `segmentId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the segment                                            |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.FetchSegmentResponse](../../models/fetchsegmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## list

List segments

### Example Usage

```typescript
import { ListSegmentsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const sourceId: number = 768578;
const order: Order = Order.Asc;
const page: number = 5472.72;
const perPage: number = 2576.49;

  const res = await sdk.segments.list(sourceId, order, page, perPage);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourceId`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | ID of the source                                                                                     |
| `order`                                                                                              | [models.Order](../../models/order.md)                                                                | :heavy_minus_sign:                                                                                   | Organizes the results based on their creation time, either ascending or descending.                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Designates which page of results to return. Always starts at 1. If 0 is specified, it defaults to 1. |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Determines the number of results on each page. It can't exceed 100.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[models.ListSegmentsResponse](../../models/listsegmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## update

Update certain values of a specified segment

### Example Usage

```typescript
import { ConfigurableSegmentAttributes, UpdateSegmentRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });
const segmentId: number = 857478;
const sourceId: number = 24555;
const configurableSegmentAttributes: ConfigurableSegmentAttributes = {
  molecules: [
    "<value>",
  ],
  name: "priority accounts",
};

  const res = await sdk.segments.update(segmentId, sourceId, configurableSegmentAttributes);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                             | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `segmentId`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | ID of the segment                                                                     |
| `sourceId`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | ID of the source                                                                      |
| `configurableSegmentAttributes`                                                       | [models.ConfigurableSegmentAttributes](../../models/configurablesegmentattributes.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `config`                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                          | :heavy_minus_sign:                                                                    | Available config options for making requests.                                         |


### Response

**Promise<[models.UpdateSegmentResponse](../../models/updatesegmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |
