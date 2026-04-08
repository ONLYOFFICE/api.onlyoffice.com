---
sidebar_position: 19
---

# Tenants

These parameters define the tenants properties for working in the multi-tenant mode.

## tenants.baseDir

`Type: string`   `Default: ""`

Defines a directory that limits the files that can be accessed by **ONLYOFFICE Docs**.

## tenants.baseDomain

`Type: string`   `Default: ""`

Defines the tenant base domain name.

## tenants.filenameConfig

`Type: string`   `Default: "config.json"`

Defines the name of the config file in the tenant folder to override *default.json*. It is used in the multi-tenant mode
to initialize the specific tenant settings (wopi, ipfilter, jwt secret etc.).

## tenants.filenameSecret

`Type: string`   `Default: "secret.key"`

Defines the *.pem* filename where the tenant secret key is stored.

## tenants.filenameLicense

`Type: string`   `Default: "license.lic"`

Defines the filename where the tenant license is stored.

## tenants.defaultTenant

`Type: string`   `Default: "localhost"`

Defines the domain name of the default tenant.

## tenants.cache

`Type: object`

Defines the cache properties for reading multi-tenant license and secret.

### tenants.cache.stdTTL

`Type: integer`   `Default: 300`

Defines the TTL (time to live) for every generated cache element (measured in seconds).

### tenants.cache.checkperiod

`Type: integer`   `Default: 60`

Defines the period used for the automatic delete check interval (measured in seconds).

### tenants.cache.useClones

`Type: boolean`   `Default: false`

Defines if the cached variables will be cloned or not. If `true`, a copy of the cached variable will be created. If `false`, only the reference will be saved.

## Example

```json
{
  "tenants": {
    "baseDir": "",
    "baseDomain": "",
    "filenameConfig": "config.json",
    "filenameSecret": "secret.key",
    "filenameLicense": "license.lic",
    "defaultTenant": "localhost",
    "cache": {
      "stdTTL": 300,
      "checkperiod": 60,
      "useClones": false
    }
  }
}
```

