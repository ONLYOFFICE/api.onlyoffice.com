---
sidebar_position: 39
---

# License

These parameters define the license configuration.

## license.license_file

**type:** `string` | **default:** `""`

Defines a path to the license file.

## license.warning_limit_percents

**type:** `integer` | **default:** `70`

Defines a percent range of the [connections and connections_view](https://api.onlyoffice.com/docs/docs-api/additional-api/command-service/license/)
limitations, exceeding which a license limit warning appears in logs.

## license.packageType

**type:** `integer` | **default:** `0`

Defines the license package type: 2 - Developer Edition.

:::note
This parameter is set at the time of version build. You do not have to manually configure it.
:::

## license.warning_license_expiration

**type:** `string` | **default:** `"30d"`

Defines the time before the license expires when a warning message is sent.

## Example

```json
{
  "license": {
    "license_file": "",
    "warning_limit_percents": 70,
    "packageType": 0,
    "warning_license_expiration": "30d"
  }
}
```

