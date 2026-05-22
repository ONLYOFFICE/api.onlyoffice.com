---
sidebar_position: 34
---

# Default request

These parameters define the [default request configuration](https://github.com/request/request#requestoptions-callback).

## services.CoAuthoring.requestDefaults.rejectUnauthorized

**type:** `boolean` | **default:** `true`

When true, TLS certificates are verified; set false only for diagnostics with self-signed or invalid certificates

## services.CoAuthoring.requestDefaults.headers

**type:** `object`

Default HTTP headers added to every outgoing request.

### services.CoAuthoring.requestDefaults.headers.User-Agent

**type:** `string` | **default:** `"Node.js/6.13"`

HTTP User-Agent header sent with outgoing requests.

### services.CoAuthoring.requestDefaults.headers.Connection

**type:** `string` | **default:** `"Keep-Alive"`

HTTP Connection header controlling keep-alive behaviour for outgoing requests.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "requestDefaults": {
        "headers": {
          "User-Agent": "Node.js/6.13",
          "Connection": "Keep-Alive"
        },
        "rejectUnauthorized": true
      }
    }
  }
}
```

