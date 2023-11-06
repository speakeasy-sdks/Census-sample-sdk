# ListSourcesResponseBody

A successfully fetched list of results.


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.Source](../../models/shared/source.md)[]                         | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `pagination`                                                                 | [components.Pagination](../../models/shared/pagination.md)                   | :heavy_check_mark:                                                           | An object to help you navigate the list of results.                          |                                                                              |
| `status`                                                                     | [operations.ListSourcesStatus](../../models/operations/listsourcesstatus.md) | :heavy_check_mark:                                                           | The outcome of the request                                                   | success                                                                      |