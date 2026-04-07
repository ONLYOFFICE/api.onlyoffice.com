---
sidebar_position: 6
---

# Runtime config

These parameters define the `runtime.json` dynamic config file properties. This file allows you to change parameters without restarting. The file is reread based on a watch event or every 5 minutes.

## runtimeConfig.filePath

`Type: string`   `Default: ""`

Defines a path to the `runtime.json` dynamic config file. By default, the `/var/www/onlyoffice/Data/runtime.json` path is used.

## runtimeConfig.cache

`Type: object`

Defines the `runtime.json` cache options.

### runtimeConfig.cache.stdTTL

`Type: integer`   `Default: 300`

Defines the TTL (time to live) for every generated cache element (measured in seconds).

### runtimeConfig.cache.checkperiod

`Type: integer`   `Default: 60`

Defines the period used for the automatic delete check interval (measured in seconds).

### runtimeConfig.cache.useClones

`Type: boolean`   `Default: false`

Defines if the cached variables will be cloned or not. If `true`, a copy of the cached variable will be created. If `false`, only the reference will be saved.

## Example

```json
{
  "runtimeConfig": {
    "filePath": "",
    "cache": {
      "stdTTL": 300,
      "checkperiod": 60,
      "useClones": false
    }
  }
}
```

