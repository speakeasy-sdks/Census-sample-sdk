# FetchSyncResponseBody

Resource not found.


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `rawResponse`                                                    | [AxiosResponse](https://axios-http.com/docs/res_schema)          | :heavy_minus_sign:                                               | Raw HTTP response; suitable for custom response parsing          |                                                                  |
| `status`                                                         | [models.FetchSyncStatus](../../models/errors/fetchsyncstatus.md) | :heavy_minus_sign:                                               | HTTP status code.                                                | 404                                                              |