# UpdateModelResponse


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `contentType`                                                  | *string*                                                       | :heavy_check_mark:                                             | HTTP response content type for this operation                  |
| `modelsUpdate`                                                 | [components.ModelsUpdate](../../models/shared/modelsupdate.md) | :heavy_minus_sign:                                             | Successfully updated the model                                 |
| `statusCode`                                                   | *number*                                                       | :heavy_check_mark:                                             | HTTP response status code for this operation                   |
| `rawResponse`                                                  | [AxiosResponse](https://axios-http.com/docs/res_schema)        | :heavy_minus_sign:                                             | Raw HTTP response; suitable for custom response parsing        |