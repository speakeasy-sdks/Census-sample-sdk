# Destination


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connectionDetails`                                          | Record<string, *any*>                                        | :heavy_minus_sign:                                           | Connection details associated with this destination.         | [object Object]                                              |
| `id`                                                         | *number*                                                     | :heavy_minus_sign:                                           | The id of this destination.                                  | 12                                                           |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The name of this destination.                                | Google Sheets                                                |
| `objects`                                                    | [models.DestinationObject](../models/destinationobject.md)[] | :heavy_minus_sign:                                           | A list of objects associated with this destination.          |                                                              |