# SyncRunsList

A successfully fetched list of results.


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.SyncRunsListData](../../models/shared/syncrunslistdata.md)     | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `pagination`                                                               | [components.Pagination](../../models/shared/pagination.md)                 | :heavy_check_mark:                                                         | An object to help you navigate the list of results.                        |                                                                            |
| `status`                                                                   | [components.SyncRunsListStatus](../../models/shared/syncrunsliststatus.md) | :heavy_check_mark:                                                         | The outcome of the request                                                 | success                                                                    |