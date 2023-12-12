<!-- Start SDK Example Usage [usage] -->
```typescript
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

async function run() {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetch(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->