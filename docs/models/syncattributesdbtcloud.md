# SyncAttributesDbtCloud

Contains the dbt Cloud job details that should trigger the sync upon success. dbt Cloud project and job IDs can be found in the URL when navigating to a job in the dbt Cloud application or via API.


## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `jobId`                   | *string*                  | :heavy_minus_sign:        | The dbt Cloud job id.     | 123456                    |
| `projectId`               | *string*                  | :heavy_minus_sign:        | The dbt Cloud project id. | 12345                     |