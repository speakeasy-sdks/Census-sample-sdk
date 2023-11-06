# Segments
(*.segments*)

### Available Operations

* [createSegment](#createsegment) - Create a new segment
* [deleteSegment](#deletesegment) - Delete Segment
* [getSourcesSourceIdFilterSegmentsSegmentId](#getsourcessourceidfiltersegmentssegmentid) - Fetch segment
* [listSegments](#listsegments) - List segments
* [patchSourcesSourceIdFilterSegmentsSegmentId](#patchsourcessourceidfiltersegmentssegmentid) - Update segment

## createSegment

Create a new segment

### Example Usage

```typescript
import { CreateSegmentRequest, InitialSegmentAttributes, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const initialSegmentAttributes: InitialSegmentAttributes = {
  businessObjectId: 207592,
  molecules: [
    "string",
  ],
  name: "priority accounts",
};
const sourceId: number = 669801;

  const res = await sdk.segments.createSegment(initialSegmentAttributes, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `initialSegmentAttributes`                                                         | [models.InitialSegmentAttributes](../../models/shared/initialsegmentattributes.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sourceId`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | ID of the source                                                                   |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[models.CreateSegmentResponse](../../models/operations/createsegmentresponse.md)>**


## deleteSegment

Deletes the segment specified

### Example Usage

```typescript
import { DeleteSegmentRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const segmentId: number = 138936;
const sourceId: number = 819461;

  const res = await sdk.segments.deleteSegment(segmentId, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `segmentId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the segment                                            |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.DeleteSegmentResponse](../../models/operations/deletesegmentresponse.md)>**


## getSourcesSourceIdFilterSegmentsSegmentId

This endpoint lists information for a given segment, including information on its molecules (our data structure for recursive constraints).

### Example Usage

```typescript
import { GetSourcesSourceIdFilterSegmentsSegmentIdRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const segmentId: number = 770291;
const sourceId: number = 189145;

  const res = await sdk.segments.getSourcesSourceIdFilterSegmentsSegmentId(segmentId, sourceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `segmentId`                                                  | *number*                                                     | :heavy_check_mark:                                           | ID of the segment                                            |
| `sourceId`                                                   | *number*                                                     | :heavy_check_mark:                                           | ID of the source                                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[models.GetSourcesSourceIdFilterSegmentsSegmentIdResponse](../../models/operations/getsourcessourceidfiltersegmentssegmentidresponse.md)>**


## listSegments

List segments

### Example Usage

```typescript
import { ListSegmentsRequest, Order, WorkspaceManagementAPI } from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const sourceId: number = 76687;
const order: Order = Order.Desc;
const page: number = 6857.66;
const perPage: number = 7875.81;

  const res = await sdk.segments.listSegments(sourceId, order, page, perPage);


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

**Promise<[models.ListSegmentsResponse](../../models/operations/listsegmentsresponse.md)>**


## patchSourcesSourceIdFilterSegmentsSegmentId

Update certain values of a specified segment

### Example Usage

```typescript
import {
  ConfigurableSegmentAttributes,
  PatchSourcesSourceIdFilterSegmentsSegmentIdRequest,
  WorkspaceManagementAPI,
} from "Workspace-Management-API";

(async() => {
  const sdk = new WorkspaceManagementAPI({
    bearerAuth: "",
  });
const segmentId: number = 440202;
const sourceId: number = 562156;
const configurableSegmentAttributes: ConfigurableSegmentAttributes = {
  molecules: [
    "string",
  ],
  name: "priority accounts",
};

  const res = await sdk.segments.patchSourcesSourceIdFilterSegmentsSegmentId(segmentId, sourceId, configurableSegmentAttributes);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `segmentId`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | ID of the segment                                                                            |
| `sourceId`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | ID of the source                                                                             |
| `configurableSegmentAttributes`                                                              | [models.ConfigurableSegmentAttributes](../../models/shared/configurablesegmentattributes.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[models.PatchSourcesSourceIdFilterSegmentsSegmentIdResponse](../../models/operations/patchsourcessourceidfiltersegmentssegmentidresponse.md)>**

