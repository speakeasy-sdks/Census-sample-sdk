# SourceAttributes

Attributes used to identify the data source for this sync.


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `connectionId`                                       | *number*                                             | :heavy_check_mark:                                   | The id used to identify the source connection.       |
| `filterSegmentId`                                    | *number*                                             | :heavy_minus_sign:                                   | The id used to identify the segment data source.     |
| `object`                                             | [components.ObjectT](../../models/shared/objectt.md) | :heavy_check_mark:                                   | Attributes of the data source.                       |