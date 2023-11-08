# Fivetran

The Fivetran job details that should trigger the sync upon success. Fivetran job name can be found in the table of Connectors or Transformations via the Fivetran application and the job id can be found in the URL when navigated to the specific connector/transform details page. These information can also be retrieved via API.


## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `jobId`                | *string*               | :heavy_minus_sign:     | The Fivetran job id.   | test_job_id            |
| `jobName`              | *string*               | :heavy_minus_sign:     | The Fivetran job name. | test_job_name          |