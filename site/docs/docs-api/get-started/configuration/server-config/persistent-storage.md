---
sidebar_position: 11
---

# Persistent storage

These parameters define the settings of the persistent storage, which is used to separate the settings for the document cache file storage and the storage of the forgotten and error files. Settings that are not specified in this object are inherited from the [storage](./storage.md) object. The separation is convenient for server upgrades.

## persistentStorage

`Type: object`

Secondary storage configuration for persistent data (forgotten files, errored files). Deep-merges with the main `storage` configuration — specify only the keys that differ from the primary storage. Useful when persistent documents need a different backend (e.g. S3 bucket) than the temporary conversion cache.

## Example

```json
{
  "persistentStorage": {}
}
```

