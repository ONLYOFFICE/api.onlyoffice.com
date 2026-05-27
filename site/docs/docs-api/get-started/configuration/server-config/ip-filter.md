---
sidebar_position: 30
---

# IP filter

These parameters define the IP filter configuration.

## services.CoAuthoring.ipfilter.rules

**type:** `object[]` | **default:** `[{"address":"*","allowed":true}]`

Defines the IP filter rules that contain the following parameters:

- **address** - the IP address of the integrator. This parameter can contain IP in the X.X.X.X format for ipv4 or in the xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx format for ipv6, dns-name or * wildcard to replace any symbol/symbols, **type**: string, **example**: "ip_address";

- **allowed** - specifies if the IP address is trusted or not, **type**: boolean, **example**: true.

## services.CoAuthoring.ipfilter.useforrequest

**type:** `boolean` | **default:** `false`

Defines if the IP filter is used for the request or not.

## services.CoAuthoring.ipfilter.errorcode

**type:** `integer` | **default:** `403`

Defines an error code for the IP filter.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "ipfilter": {
        "rules": [
          {
            "address": "*",
            "allowed": true
          }
        ],
        "useforrequest": false,
        "errorcode": 403
      }
    }
  }
}
```

