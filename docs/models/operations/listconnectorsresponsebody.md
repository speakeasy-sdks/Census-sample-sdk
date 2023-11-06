# ListConnectorsResponseBody

A successfully fetched list of results.


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [models.Connector](../../models/shared/connector.md)[]                         | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `pagination`                                                                   | [models.Pagination](../../models/shared/pagination.md)                         | :heavy_check_mark:                                                             | An object to help you navigate the list of results.                            |                                                                                |
| `status`                                                                       | [models.ListConnectorsStatus](../../models/operations/listconnectorsstatus.md) | :heavy_check_mark:                                                             | The outcome of the request                                                     | success                                                                        |