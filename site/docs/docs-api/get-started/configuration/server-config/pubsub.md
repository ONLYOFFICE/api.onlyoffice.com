---
sidebar_position: 32
---

# PubSub service

This parameter defines the PubSub service configuration.

## services.CoAuthoring.pubsub.maxChanges

`Type: integer`   `Default: 1000`

Defines the maximum size of changes which can be passed via PubSub. If the size exceeds the specified value, the changes will be read from the database.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "pubsub": {
        "maxChanges": 1000
      }
    }
  }
}
```

