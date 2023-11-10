# Pagination

An object to help you navigate the list of results.


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `lastPage`                                              | *number*                                                | :heavy_minus_sign:                                      | The number of the last page with records.               | 10                                                      |
| `nextPage`                                              | *number*                                                | :heavy_minus_sign:                                      | The next page number, or `null` if it's the last page.  | 3                                                       |
| `page`                                                  | *number*                                                | :heavy_minus_sign:                                      | The current page number.                                | 2                                                       |
| `perPage`                                               | *number*                                                | :heavy_minus_sign:                                      | Records on each page.                                   | 25                                                      |
| `prevPage`                                              | *number*                                                | :heavy_minus_sign:                                      | The previous page number, or `null` for the first page. | 1                                                       |
| `totalRecords`                                          | *number*                                                | :heavy_minus_sign:                                      | Total records in the collection.                        | 14                                                      |