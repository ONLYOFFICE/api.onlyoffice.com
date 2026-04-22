---
sidebar_position: -1
---

# Load balancing with shard key

When ONLYOFFICE Docs runs as a multi-server cluster, collaborative editing requires that all requests for the same document reach the same server node. The `shardkey` query parameter enables this: your load balancer can read it from the URL and route accordingly.

## Adding shard key to API requests

Add `shardkey` to the query string of every request you send to the **document command service**, **document conversion service**, or **document builder service**. Set its value to the document [`key`](../../usage-api/config/document/document.md#key) from the request body:

```
?shardkey=Khirz6zTPdfd7
```

If the request body has no `key` field (for example, the [getForgottenList](../../additional-api/command-service/getforgottenlist.md) command), omit the parameter.

## Browser-to-server requests

During collaborative editing, the **document editor** appends the shard key to its browser-to-server requests automatically. In WOPI integrations, the [WOPISrc](../../using-wopi/key-concepts.md#wopisrc) query parameter serves the same routing purpose.
