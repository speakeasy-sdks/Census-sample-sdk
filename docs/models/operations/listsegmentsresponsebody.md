# ListSegmentsResponseBody

A successfully fetched list of results.


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [models.Segment](../../models/shared/segment.md)[]                         | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `pagination`                                                               | [models.Pagination](../../models/shared/pagination.md)                     | :heavy_check_mark:                                                         | An object to help you navigate the list of results.                        |                                                                            |
| `status`                                                                   | [models.ListSegmentsStatus](../../models/operations/listsegmentsstatus.md) | :heavy_check_mark:                                                         | The outcome of the request                                                 | success                                                                    |