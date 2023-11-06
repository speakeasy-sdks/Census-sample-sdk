# CreateSegmentResponseBody

Segment created successfully


## Fields

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                                    | [operations.Data](../../models/operations/data.md)                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `filterSegmentSourceUrl`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Some subproperties of the filter_segment are created asynchronously. You can query this url to fetch the status of the creation (true or false).<br/>When status is true, it will return all properties returned in `GET /sources/{source_id}/filter_segments/{segment_id}`.<br/> | https://app.getcensus.com/api/v1/sources/12/filter_segments/9/source_status                                                                                                                                                                                               |
| `status`                                                                                                                                                                                                                                                                  | [operations.CreateSegmentStatus](../../models/operations/createsegmentstatus.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Outcome of the operation.                                                                                                                                                                                                                                                 | created                                                                                                                                                                                                                                                                   |