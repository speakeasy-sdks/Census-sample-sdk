# SyncAttributesHighWaterMarkAttributes

The high water mark diffing strategy will allow append syncs to use a timestamp column when identifying new records instead of the default Census diff engine (using primary keys).


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `columnName`                                                            | *string*                                                                | :heavy_check_mark:                                                      | The name of the column that should be used for identifying new records. | updated_at                                                              |
| `useHighWaterMarkDiffType`                                              | *boolean*                                                               | :heavy_check_mark:                                                      | If true, the high water mark diff strategy will be used.                | true                                                                    |