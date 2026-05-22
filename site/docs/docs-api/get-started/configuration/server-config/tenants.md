---
sidebar_position: 19
---

# Tenants

These parameters define the tenants properties for working in the multi-tenant mode.

## tenants.baseDir

**type:** `string` | **default:** `""`

Defines a directory that limits the files that can be accessed by **ONLYOFFICE Docs**.

## tenants.baseDomain

**type:** `string` | **default:** `""`

Defines the tenant base domain name.

## tenants.filenameConfig

**type:** `string` | **default:** `"config.json"`

Defines the name of the config file in the tenant folder to override *default.json*. It is used in the multi-tenant mode
to initialize the specific tenant settings (wopi, ipfilter, jwt secret etc.).

## tenants.filenameSecret

**type:** `string` | **default:** `"secret.key"`

Defines the *.pem* filename where the tenant secret key is stored.

## tenants.filenameLicense

**type:** `string` | **default:** `"license.lic"`

Defines the filename where the tenant license is stored.

## tenants.defaultTenant

**type:** `string` | **default:** `"localhost"`

Defines the domain name of the default tenant.

## tenants.cache

**type:** `object`

Defines the cache properties for reading multi-tenant license and secret.

### tenants.cache.stdTTL

**type:** `integer` | **default:** `300`

Defines the TTL (time to live) for every generated cache element (measured in seconds).

### tenants.cache.checkperiod

**type:** `integer` | **default:** `60`

Defines the period used for the automatic delete check interval (measured in seconds).

### tenants.cache.useClones

**type:** `boolean` | **default:** `false`

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

