# Sync


## Fields

| Field                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                 | The time the sync was created.                                                                                                                                                                                                                     | 2023-09-05T19:42:42.672Z                                                                                                                                                                                                                           |
| `cronExpression`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | Specify what cron schedule this sync should run on if the `schedule_frequency` is set to `"experessions"`.                                                                                                                                         | * 1 * * *                                                                                                                                                                                                                                          |
| `destinationAttributes`                                                                                                                                                                                                                            | [models.DestinationAttributes](../models/destinationattributes.md)                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                    |
| `failedRecordNotificationsEnabled`                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                 | When true, will email all workspace users with email notifications enabled and all workspace additional emails when the sync has more than failed_record_notifications_threshold_percent rejected or invalid records in the source or destination. | false                                                                                                                                                                                                                                              |
| `failedRecordNotificationsThresholdPercent`                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | The percentage of rejected and invalid records for which failed record emails will be triggered.                                                                                                                                                   | 10                                                                                                                                                                                                                                                 |
| `failedRunNotificationsEnabled`                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                 | When true, will email all workspace users with email notifications enabled and all workspace additional emails when the sync fails and recovers.                                                                                                   | false                                                                                                                                                                                                                                              |
| `fieldBehavior`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | Specify `"sync_all_properties"` to automatically update mappings.                                                                                                                                                                                  | sync_all_properties                                                                                                                                                                                                                                |
| `fieldNormalization`                                                                                                                                                                                                                               | [models.FieldNormalization](../models/fieldnormalization.md)                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                 | If `field_behavior` is set to `"sync_all_properties"`, specify how automatic mappings should be named.                                                                                                                                             | snake_case                                                                                                                                                                                                                                         |
| `highWaterMarkAttributes`                                                                                                                                                                                                                          | [models.HighWaterMarkAttributes](../models/highwatermarkattributes.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                 | The high water mark diffing strategy will allow append syncs to use a timestamp column when identifying new records instead of the default Census diff engine (using primary keys).                                                                |                                                                                                                                                                                                                                                    |
| `id`                                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | The identifier for the sync.                                                                                                                                                                                                                       | 15135                                                                                                                                                                                                                                              |
| `label`                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | A label to give to this sync.                                                                                                                                                                                                                      | New Signups to Leads                                                                                                                                                                                                                               |
| `mappings`                                                                                                                                                                                                                                         | [models.MappingAttributes](../models/mappingattributes.md)[]                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                                | [object Object],[object Object],[object Object]                                                                                                                                                                                                    |
| `operation`                                                                                                                                                                                                                                        | [models.Operation](../models/operation.md)                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                 | How records are synced to the destination.                                                                                                                                                                                                         | mirror                                                                                                                                                                                                                                             |
| `paused`                                                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                 | Whether or not this sync should be paused.                                                                                                                                                                                                         | false                                                                                                                                                                                                                                              |
| `scheduleDay`                                                                                                                                                                                                                                      | [models.ScheduleDay](../models/scheduleday.md)                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                 | What day of the week this sync should run if `schedule_frequency` is set to `"weekly"`.                                                                                                                                                            | Monday                                                                                                                                                                                                                                             |
| `scheduleFrequency`                                                                                                                                                                                                                                | [models.ScheduleFrequency](../models/schedulefrequency.md)                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                 | When this sync should be run.                                                                                                                                                                                                                      | daily                                                                                                                                                                                                                                              |
| `scheduleHour`                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | What hour of the day this sync should run if `schedule_frequency` is set to `"weekly"` or `"daily"`.                                                                                                                                               | 10                                                                                                                                                                                                                                                 |
| `scheduleMinute`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | What minute of the hour this sync should run if `scheule_frequency` is set to `"weekly"`, `"daily"` or `"hourly"`.                                                                                                                                 | 30                                                                                                                                                                                                                                                 |
| `sourceAttributes`                                                                                                                                                                                                                                 | [models.SourceAttributes](../models/sourceattributes.md)                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                 | Attributes used to identify the data source for this sync.                                                                                                                                                                                         |                                                                                                                                                                                                                                                    |
| `status`                                                                                                                                                                                                                                           | [models.SyncStatus](../models/syncstatus.md)                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                 | The sync's current status. Ready means that the sync has not yet run, up to date implies the last sync completed successfully and failing means that the sync failed.                                                                              |                                                                                                                                                                                                                                                    |
| `triggers`                                                                                                                                                                                                                                         | [models.Triggers](../models/triggers.md)                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | Specify triggers for the sync. More than one type trigger can be configured.                                                                                                                                                                       |                                                                                                                                                                                                                                                    |
| `updatedAt`                                                                                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                 | The time the sync was updated.                                                                                                                                                                                                                     | 2023-09-05T19:42:42.672Z                                                                                                                                                                                                                           |
| `validateOnly`                                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                 | When true, checks if the given payload is valid to configure a sync. Does not create the sync.                                                                                                                                                     | true                                                                                                                                                                                                                                               |