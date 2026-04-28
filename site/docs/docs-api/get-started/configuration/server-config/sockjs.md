---
sidebar_position: 36
---

# SockJs

These parameters define the SockJs configuration.

## services.CoAuthoring.sockjs.disable_cors

**type:** `boolean` | **default:** `true`

Defines if CORS will be disabled or not. The `true` value prevents the **Access-Control-Allow-Origin** header vulnerability.

## services.CoAuthoring.sockjs.sockjs_url

**type:** `string` | **default:** `""`

Defines a path to the `sockjs.min.js` file.

## services.CoAuthoring.sockjs.websocket

**type:** `boolean` | **default:** `true`

Defines if the WebSocket protocol is enabled or not.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "sockjs": {
        "sockjs_url": "",
        "disable_cors": true,
        "websocket": true
      }
    }
  }
}
```

