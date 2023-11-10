# ConnectorsList

A successfully fetched list of results.


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.Data](../models/data.md)                                 | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `pagination`                                                     | [models.Pagination](../models/pagination.md)                     | :heavy_check_mark:                                               | An object to help you navigate the list of results.              |                                                                  |
| `status`                                                         | [models.ConnectorsListStatus](../models/connectorsliststatus.md) | :heavy_check_mark:                                               | The outcome of the request                                       | success                                                          |