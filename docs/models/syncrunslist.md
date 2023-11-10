# SyncRunsList

A successfully fetched list of results.


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [models.SyncRunsListData](../models/syncrunslistdata.md)     | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `pagination`                                                 | [models.Pagination](../models/pagination.md)                 | :heavy_check_mark:                                           | An object to help you navigate the list of results.          |                                                              |
| `status`                                                     | [models.SyncRunsListStatus](../models/syncrunsliststatus.md) | :heavy_check_mark:                                           | The outcome of the request                                   | success                                                      |