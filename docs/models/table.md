# Table


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `columns`                                               | [models.Column](../models/column.md)[]                  | :heavy_minus_sign:                                      | A list of columns from this table.                      | [object Object],[object Object]                         |
| `id`                                                    | *number*                                                | :heavy_minus_sign:                                      | The id of this table.                                   | 18                                                      |
| `tableCatalog`                                          | *string*                                                | :heavy_minus_sign:                                      | The catalog associated with this table.                 | public                                                  |
| `tableName`                                             | *string*                                                | :heavy_minus_sign:                                      | The name of this table.                                 | users                                                   |
| `tableSchema`                                           | *string*                                                | :heavy_minus_sign:                                      | The schema associated with this table.                  | production                                              |
| `type`                                                  | [models.TableType](../models/tabletype.md)              | :heavy_minus_sign:                                      | The type of this source object, will always be `table`. | table                                                   |