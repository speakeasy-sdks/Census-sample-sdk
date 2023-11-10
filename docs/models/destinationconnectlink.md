# DestinationConnectLink


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `destinationId`                                                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                       | The ID of the destination, if any, associated with the data.                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                          |
| `expiration`                                                                                                                                                                                                                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                       | The date and time when the Connect Link will expire.                                                                                                                                                                                                                                                                                                                     | 2023-07-22T23:42:47.239Z                                                                                                                                                                                                                                                                                                                                                 |
| `id`                                                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                       | The unique ID associated with the Connect Link.                                                                                                                                                                                                                                                                                                                          | 469                                                                                                                                                                                                                                                                                                                                                                      |
| `redirectUri`                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                       | The redirect URI, if any, associated with the Connect Link. The URL that you'd like the end-user to be redirected to after authorizing the destination. We do not forward the OAuth code or token to this url. The redirect URI can be configured globally under your organization settings in the Census UI or on dynamically via the API when creating a Connect Link. |                                                                                                                                                                                                                                                                                                                                                                          |
| `revoked`                                                                                                                                                                                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                       | A boolean value indicating whether the Connect Link has been revoked or not.                                                                                                                                                                                                                                                                                             | false                                                                                                                                                                                                                                                                                                                                                                    |
| `type`                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                       | The type of destination connection to be managed by this link. The list of valid types can be fetched from `/destination_connect_links/types`.                                                                                                                                                                                                                           | hubspot                                                                                                                                                                                                                                                                                                                                                                  |
| `uri`                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                       | The authorization url that you will provide to end-users that begins the Census-hosted flow to authorize a destination into your workspace.                                                                                                                                                                                                                              | https://app.getcensus.com/pbc?auth=expiring_auth_key                                                                                                                                                                                                                                                                                                                     |