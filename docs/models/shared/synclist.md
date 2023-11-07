# SyncList

A successfully fetched list of results.


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | *any*[]                                                            | :heavy_check_mark:                                                 | The list of results.                                               |                                                                    |
| `pagination`                                                       | [components.Pagination](../../models/shared/pagination.md)         | :heavy_check_mark:                                                 | An object to help you navigate the list of results.                |                                                                    |
| `status`                                                           | [components.SyncListStatus](../../models/shared/syncliststatus.md) | :heavy_check_mark:                                                 | The outcome of the request                                         | success                                                            |