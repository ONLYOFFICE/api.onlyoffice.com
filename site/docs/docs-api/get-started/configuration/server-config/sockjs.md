---
sidebar_position: 36
---

# SockJs

These parameters define the SockJs configuration.

## services.CoAuthoring.sockjs.disable_cors

`Type: boolean`   `Default: true`

Defines if CORS will be disabled or not. The `true` value prevents the **Access-Control-Allow-Origin** header vulnerability.

## services.CoAuthoring.sockjs.sockjs_url

`Type: string`   `Default: ""`

Defines a path to the `sockjs.min.js` file.

## services.CoAuthoring.sockjs.websocket

`Type: boolean`   `Default: true`

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

