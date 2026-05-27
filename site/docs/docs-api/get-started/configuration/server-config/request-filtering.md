---
sidebar_position: 33
---

# Request Filtering Agent

These parameters define the [Request Filtering Agent configuration](https://github.com/azu/request-filtering-agent#api).

## services.CoAuthoring.request-filtering-agent.allowPrivateIPAddress

**type:** `boolean` | **default:** `false`

Defines if it is allowed to connect private IP address or not. This includes private IP addresses and reserved IP addresses.

## services.CoAuthoring.request-filtering-agent.allowMetaIPAddress

**type:** `boolean` | **default:** `false`

Defines if it is allowed to connect meta IP address or not. Meta address can be `0.0.0.0` (IPv4) or `::` (IPv6) - a meta address that routing another address.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "request-filtering-agent": {
        "allowPrivateIPAddress": false,
        "allowMetaIPAddress": false
      }
    }
  }
}
```

