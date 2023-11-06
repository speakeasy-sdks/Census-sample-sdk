# CurrentStep

The current step of the sync run. Available if the sync is running.


## Values

| Name                                          | Value                                         |
| --------------------------------------------- | --------------------------------------------- |
| `CheckingForColumnsToRemoveFromTheSync`       | Checking for columns to remove from the sync  |
| `CheckingForFieldsToCreateInDestination`      | Checking for fields to create in destination  |
| `CheckingSourceAndDestinationConfiguration`   | Checking source and destination configuration |
| `UnloadingDataFromWarehouse`                  | Unloading data from warehouse                 |
| `LoadingDataIntoDestinationService`           | Loading data into destination service         |
| `CommittingDataToDestinationService`          | Committing data to destination service        |
| `CommittingSyncToWarehouse`                   | Committing sync to warehouse                  |
| `RunningSync`                                 | Running sync                                  |