<!-- Start SDK Example Usage -->


```typescript
import { FetchConnectorRequest, WorkspaceManagementAPI } from "Workspace-Management-API";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetch(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->