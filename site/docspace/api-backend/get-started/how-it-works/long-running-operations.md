---
sidebar_position: -5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Long-running operations

The user initiates a long-running operation by sending a request to the appropriate API endpoint, which returns an object containing information about the initiated operation. An [example](../../../../docspace/api-backend/usage-api/rooms/archive-room.md) of such a request and response:

<Tabs>
  <TabItem value="request" label="Request">
    ``` http
    PUT /api/2.0/files/rooms/1234/archive
    Host: yourportal.onlyoffice.com
    Content-Type: application/json
    Accept: application/json

    {
      "DeleteAfter": true
    }
    ```
  </TabItem>
  <TabItem value="response" label="Response">
    ``` json
    {
      "error": "",
      "finished": false,
      "id": "00000000-0000-0000-0000-000000000000",
      "operation": 0,
      "processed": "0",
      "progress": 0
    }
    ```
  </TabItem>
</Tabs>

The following endpoints return the operation status:

- [`PUT api/2.0/files/rooms/{id}/archive`](../../../../docspace/api-backend/usage-api/rooms/archive-room.md)
- [`PUT api/2.0/files/fileops/delete`](../../../../docspace/api-backend/usage-api/files/operations/delete-batch-items.md)
- [`DELETE api/2.0/files/file/{fileid}`](../../../../docspace/api-backend/usage-api/files/files/delete-file.md)

## Monitoring the operation status

To track the operation progress, you must periodically execute a GET request to the following [endpoint](../../../../docspace/api-backend/usage-api/files/operations/get-operation-statuses.md):

``` http
GET /api/2.0/files/fileops
```

This request returns an array of the current operations as objects similar to the one described above.

In this array, the ID of the previously initiated operation is returned. If *finished* is not true, or *progress* or *percents* is not 100, wait a while and then execute the *files/fileops/* request again. This loop is repeated until the operation completes or the error text appears in the *error* property.
