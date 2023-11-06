# GetDestinationsDestinationIdRefreshObjectsStatusRequest


## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `destinationId`                                                                                                 | *number*                                                                                                        | :heavy_check_mark:                                                                                              | ID of the destination with an active refresh job                                                                |
| `refreshKey`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | An `id` provided by the `refresh_objects` endpoint, used to check whether the refresh objects job has finished. |