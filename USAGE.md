<!-- Start SDK Example Usage -->


```typescript
import { WorkspaceManagementAPI } from "Workspace-Management-API";
import { FetchConnectorRequest } from "Workspace-Management-API/dist/models/operations";

(async () => {
    const sdk = new WorkspaceManagementAPI({
        bearerAuth: "",
    });
    const serviceName: string = "string";

    const res = await sdk.connectors.fetchConnector(serviceName);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->