# SyncRunStatus

Status of the sync run. Possible values are:
- `working`: The sync is currently executing.
- `completed`: The sync finished successfully.
- `failed`: The sync failed during execution.
- `skipped`: An earlier instance of the sync is still running, so this run was skipped.
- `queued`: The sync run is queued for execution.



## Values

| Name        | Value       |
| ----------- | ----------- |
| `Working`   | working     |
| `Completed` | completed   |
| `Failed`    | failed      |
| `Skipped`   | skipped     |
| `Queued`    | queued      |